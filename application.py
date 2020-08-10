from flask import Flask, jsonify ,request ,render_template

application = Flask(__name__)

@application.route('/')
def index():
    return render_template('index.html')

myHome = {
    'lights' : [{"isOn":True},{"isOn":False}],
    'value' : 79,
    'logs' : []
}

def ordinal_suffix_of(i):
    j = i % 10
    if (j ==1):
        return f'{i}st'
    if(j==2) :
        return f'{i}nd'
    if(j==3) :
        return f'{i}rd'
    return f'{i}th'


@application.route('/api/home', methods=['GET'])
def welcome():
    myHome["logs"].append("Welcome to your home")
    return jsonify(myHome)


@application.route('/api/home',methods=['POST'])
def addLight(): 
    myHome["lights"].append({"isOn":False})
    myHome["logs"].append("A new ligth added")
    return jsonify(myHome)

@application.route('/api/home/lights',methods=['DELETE'])
def deleteLastLight():
    myHome["lights"].pop()
    myHome["logs"].append("Last light deleted")
    return jsonify(myHome) 

@application.route('/api/home/lights/<id>',methods=['DELETE'])
def deleteLight(id):
    suffix = ordinal_suffix_of(int(id)+1)
    myHome["logs"].append(f'The {suffix} light deleted')
    del myHome["lights"][int(id)]
    return jsonify(myHome["lights"])


@application.route('/api/home/lights/toggle/<id>',methods=['PUT'])
def toggleLight(id):
    suffix = ordinal_suffix_of(int(id)+1)
    if myHome["lights"][int(id)]["isOn"]:
        myHome["logs"].append(f'The {suffix} light turned off')
    else :
        myHome["logs"].append(f'The {suffix} light turned on')
    myHome["lights"][int(id)]["isOn"]= not myHome["lights"][int(id)]["isOn"]
    return jsonify(myHome)


@application.route('/api/home/tempature',methods=['PUT'])
def setTempature():
    myHome["value"] =  request.json["value"]
    myHome["logs"].append(f'Set the thermostat to {request.json["value"]}°F')
    return jsonify(myHome)


if __name__ == "__main__":

    application.debug = True
    application.run()

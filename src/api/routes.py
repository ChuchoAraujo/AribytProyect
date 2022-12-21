"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

#-------------------------------------------------- CREACION RUTAS --------------------------------------------------------------------------------------#

#---------------------------------------- GET / USERS ----------------------------------------#

@api.route('/users', methods=['GET'])
def get_users():
    call_users = User.query.all()
    result = [element.serialize() for element in call_users]
    response_body = {"msg": "Get create successfully!"}
    return jsonify(result), 200

#---------------------------------------- POST / LOGIN ----------------------------------------#

@api.route('/acceso', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    role = request.json.get("role", None)

    user = User.query.filter_by(email=email,password=password, role=role).first()
  
    if user == None:
        return jsonify({"msg": "User, password or role Not exist!"}), 401
    
    access_token = create_access_token(identity=user.email)

    response_body = {
        "msg": "Token create",
        "token": access_token
    }

    return jsonify(response_body), 200 

#---------------------------------------- GET / PRIVATE ----------------------------------------#

@api.route("/private", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    response_body= {
        "msg": "permission granted",
        "done": True,
        "user": get_jwt_identity()
    }
    return jsonify(response_body), 200
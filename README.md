This project presents a Single Page Application for working with a list of students. 
The web application is written in React, MongoDB is used as a database, API is implemented in Node.js.

You can view the expanded demo [here](http://165.232.74.148:3000). Frontend uses port 3000; API uses port 4000. You can change it in the docker-compose.yml in the environment of the service `client` for web-app or `server` for API.

# Deployment

Installation requires docker and docker-compose. To install them, use your package manager. The Ubuntu `apt` will be used as an example.

## Pre-training

  1. Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:

```
    $ sudo apt-get update
    $ sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common
```

  2. Add Docker’s official GPG key:
  ```
    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  ```
  Verify that you now have the key with the fingerprint `9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88`, by searching for the last 8 characters of the fingerprint.
  
  3. Use the following command to set up the stable repository.
  ```
    $ sudo add-apt-repository \
     "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) \
     stable"
  ```
  
## Installing Docker

  1.  Update the `apt` package index, and install the latest version of Docker Engine and containerd, or go to the next step to install a specific version:
```
   $ sudo apt-get update
   $ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

  2. Verify that Docker Engine is installed correctly by running the hello-world image.
  ```
    $ sudo docker run hello-world
  ```
  
## Installing docker-compose

  1. Install Docker-Compose from the Docker repository on GitHub using the following command:
  ```
    $ sudo curl -L https://github.com/docker/compose/releases/download/1.26.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
  ```
  2. Configure the necessary permissions.
  ```
    $ sudo chmod +x /usr/local/bin/docker-compose
  ```
  3. Verify a successful installation by using:
  ```
    $ docker-compose --version
  ```
  If everything was successful, you should see the docker-compose version.

## Application launch

  To run the application, use the command `docker-compose up --build` while in the directory of the application. To run in the background, add the `-d` flag.
  
  After launching go to the `http://localhost:3000` to see the app or `http://localhost:4000` for working with API.
  
  If with `localhost` doesn't work, enter your ip address instead, which you can find out with the command: `docker-machine ip`.
  
  To stop and delete deployed containers, use the command `docker-compose down`.
  
  
# API

API has three functionality: getting, adding, and deleting students by id. Remind, all requests are made on port 4000.
You can change it in the docker-compose.yml in the environment of the service `server`.

## Getting students

**DESCRIPTION**: retrieves all students contained in the MongoDB-collection

**URL**: `/api/get/`

**METHOD**: `GET`

**EXPECTED RESPONSE STATUS** 200

**EXAMPLE RESPONSE BODY**:
```
[
  {
    _id": "5f35c69b1fde7f5657769dc5",
    "avatar": "uploads/GeneratedFileName",
    "name": "Иванов Иван Иванович",
    "speciality": "Прикладная информатика",
    "group": "ПИ-101",
    "rating": 101,
    "age": 18,
    "gender": "Мужской",
    "color": "rainbow"
  }
]
```

## Adding students

**DESCRIPTION**: adds a new student to the MongoDB-collection

**URL**: `/api/post/`

**METHOD**: `POST`

**EXPECTED RESPONSE STATUS:** 201

## Deleting students

**DESCRIPTION**: deletes a student from the MongoDB-collection

**URL**: `/api/delete/:id`

**URL Parameters**: `id`=[ObjectId] where `id` is the ID of the student on the MongoDB-collection.

**METHOD**: `DELETE`

**EXPECTED RESPONSE STATUS**: 200

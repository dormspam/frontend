from flask import Flask, send_from_directory
import os

application = Flask(__name__, static_folder="build")

@application.route("/", defaults={"path": ""})
@application.route("/<path:path>")
def static_proxy(path):
    if os.path.isfile("./build/%s" % path):
        return send_from_directory(application.static_folder, path)
    else:
        return send_from_directory(application.static_folder, "index.html")

if __name__ == "__main__":
    application.run()

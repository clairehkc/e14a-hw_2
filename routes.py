from flask import Flask, render_template, request, redirect, url_for
from models import db, User
from forms import UsersForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/homework_users'
db.init_app(app)

app.secret_key = "e14a-key"

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/index", methods=['GET'])
def indexRedirect():
	return index()

@app.route('/add-user', methods=['GET', 'POST'])
def add_user():
	form = UsersForm()
	languages = ['cpp', 'java', 'js', 'php', 'py', 'other']
	if request.method == 'GET':
		return render_template('add_user.html', form=form, languages=languages)
	else:
		if form.validate_on_submit():
			username = request.form['username']
			first_name = request.form['first_name']
			last_name = request.form['last_name']
			prog_lang = request.form['prog_lang']
			experience_yr = request.form['experience_yr']
			age = request.form['age']
			hw1_hrs = request.form['hw1_hrs']
			new_user = User(username=username, first_name=first_name, last_name=last_name, prog_lang=prog_lang, experience_yr=experience_yr, age=age, hw1_hrs=hw1_hrs)
			print("**---------**")
			print(new_user.username)
			db.session.add(new_user)
			db.session.commit()
			return redirect(url_for('index'))

if __name__ == "__main__":
	app.run(debug=True)
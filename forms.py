# Define Web Form

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, FloatField, SubmitField
from wtforms.validators import DataRequired

class UsersForm(FlaskForm):
	username = StringField('Username', validators=[DataRequired()])
	first_name = StringField('First Name', validators=[DataRequired()])
	last_name = StringField('Last Name', validators=[DataRequired()])
	prog_lang = StringField('Programming Language', validators=[DataRequired()])
	experience_yr = FloatField('Years of Experience', validators=[DataRequired()])
	age = IntegerField('Age', validators=[DataRequired()])
	hw1_hrs = FloatField('HW1 Hours', validators=[DataRequired()])
	submit = SubmitField('Enter')
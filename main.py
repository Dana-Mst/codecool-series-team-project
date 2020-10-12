from flask import Flask, render_template, url_for
from data import queries
import math
from dotenv import load_dotenv
from util import json_response

load_dotenv()
app = Flask('codecool_series')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/get-shows')
@json_response
def get_shows():
    shows = queries.get_shows()
    return shows


@app.route('/most-rated-shows')
def most_rated_shows():
    return render_template('most-rated.html')


@app.route('/get-15-most-rated/<int:page_number>')
@json_response
def get_15_most_rated(page_number):
    offset = (page_number*15) - 15
    get_15_most_rated = queries.most_rated_shows(offset)
    return get_15_most_rated


@app.route('/design')
def design():
    return render_template('design.html')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()

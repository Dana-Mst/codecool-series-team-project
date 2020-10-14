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


@app.route('/get-15-most-rated/<int:page_number>/<column>/<direction>')
@json_response
def get_15_most_rated(page_number, column, direction):
    offset = (page_number*15) - 15
    get_15_most_rated = queries.most_rated_shows(offset, column, direction)
    return get_15_most_rated


@app.route('/show/<int:id>')
def display_show(id):
    return render_template('show.html')


@app.route('/single-show/<int:id>')
@json_response
def get_single_show(id):
    seasons = queries.get_seasons(id)
    actors = queries.get_actors(id)
    show = queries.get_single_show(id)
    data = {}
    data["seasons"] = seasons
    data['actors'] = actors
    data['show'] = show
    return data

# @app.route('/design')
# def design():
#     return render_template('design.html')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()

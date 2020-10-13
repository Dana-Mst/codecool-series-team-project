from data import data_manager
from psycopg2 import sql



def get_shows():
    return data_manager.execute_select('SELECT id, title FROM shows;')


def most_rated_shows(offset, sorting_column, sorting_direction):
    if sorting_direction == 'asc':
        query = """
        SELECT shows.id, shows.title, shows.year, shows.runtime,
        shows.rating,
        array_agg(genres.name) as genres,
        shows.trailer, shows.homepage
        FROM shows
        LEFT JOIN show_genres
        ON shows.id = show_genres.show_id
        LEFT JOIN genres
        ON show_genres.genre_id = genres.id
        GROUP BY shows.id
        ORDER BY {col} ASC
        OFFSET %s
        LIMIT 15
        """
    else:
        query = """
        SELECT shows.id, shows.title, shows.year, shows.runtime,
        shows.rating,
        array_agg(genres.name) as genres,
        shows.trailer, shows.homepage
        FROM shows
        LEFT JOIN show_genres
        ON shows.id = show_genres.show_id
        LEFT JOIN genres
        ON show_genres.genre_id = genres.id
        GROUP BY shows.id
        ORDER BY {col} DESC
        OFFSET %s
        LIMIT 15
        """
    data = data_manager.execute_select(sql.SQL(query).format(col=sql.Identifier(sorting_column)), (offset, ))

    for index, item in enumerate(data):
        data[index]["rating"] = str(round(item["rating"], 1)) + " ☆"
        data[index]["year"] = item['year'].strftime('%Y')

    return data



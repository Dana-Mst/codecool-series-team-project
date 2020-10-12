from data import data_manager


def get_shows():
    return data_manager.execute_select('SELECT id, title FROM shows;')


def most_rated_shows(offset):
    query = """
    SELECT shows.id, shows.title, shows.runtime,  shows.rating,
    ARRAY_AGG(genres.name) AS genres, shows.trailer, shows.homepage
    FROM shows
    LEFT JOIN show_genres
    ON shows.id = show_genres.show_id
    LEFT JOIN genres
    ON genres.id = show_genres.genre_id
    GROUP BY shows.id
    ORDER BY rating DESC
    OFFSET %s
    LIMIT 15;
    """
    return data_manager.execute_select(query, (offset, ))

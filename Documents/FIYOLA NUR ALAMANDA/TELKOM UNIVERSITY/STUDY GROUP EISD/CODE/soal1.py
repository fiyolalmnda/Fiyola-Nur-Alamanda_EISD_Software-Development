def rating(ratings):
    terendah = min(ratings)
    tertinggi = max(ratings)
    rata_rata = round(sum(ratings) / len(ratings), 1)
    return [terendah, tertinggi, rata_rata]

print(rating([5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5]))
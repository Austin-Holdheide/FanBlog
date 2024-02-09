import json
import random
import string

def generate_random_post(post_id):
    return {
        "id": post_id,
        "title": ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=random.randint(5, 15))),
        "views": random.randint(20, 100),
        "date": f"2024-{random.randint(1, 12):02d}-{random.randint(1, 28):02d}",
    }

def generate_random_blog_entry(blog_id):
    return {
        "id": blog_id,
        "title": ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=random.randint(5, 15))),
        "date": f"2024-{random.randint(1, 12):02d}-{random.randint(1, 28):02d}",
        "text": ' '.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=random.randint(100, 300))),
        "author": ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase, k=random.randint(5, 15)))
    }

def generate_large_data():
    posts = [generate_random_post(post_id) for post_id in range(1, 3001)]
    blog_entries = [generate_random_blog_entry(blog_id) for blog_id in range(1, 11)]  # Adjust the range as needed
    
    return {
        "posts": posts,
        "blogposts": blog_entries
    }

def save_to_json(data, filename="generated_data.json"):
    with open(filename, "w") as file:
        json.dump(data, file, indent=2)

if __name__ == "__main__":
    generated_data = generate_large_data()
    save_to_json(generated_data)

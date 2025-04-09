from flask import Flask, render_template_string, jsonify

app = Flask(__name__)

# Sample inventory data
inventory = [
    {"name": "Amethyst", "description": "Purple Quartz", "price": 14.99},
    {"name": "Rose Quartz", "description": "Pink Crystal", "price": 9.99},
    {"name": "Obsidian", "description": "Black Volcanic Glass", "price": 19.99},
]

@app.route('/')
def home():
    return render_template_string('''
<!DOCTYPE html>
<html>
<head>
    <title>Rock & Mineral Shop</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 20px;
            color: #fff;
        }

        h1 {
            text-align: center;
            color: #f39c12;
            margin-bottom: 40px;
        }

        #inventory {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1000px;
            margin: 0 auto;
        }

        .item {
            background: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        .item h2 {
            margin-top: 0;
            font-size: 1.5em;
            color: #d35400;
        }

        .item p {
            margin: 8px 0;
            font-size: 0.95em;
        }

        .price {
            font-size: 1.1em;
            font-weight: bold;
            color: #e67e22;
        }

        /* Desert background */
        .iholder {
            width: 100%;
            height: 100vh;
            background-image: url('https://wallpapercrafter.com/desktop7/1836974-california-clouds-Death-Valley-Desert-Dune-landscape.jpg');
            background-size: cover;
            background-position: center center;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1; /* Send the image to the background */
        }
    </style>
</head>
<body>
    <div class="iholder"></div>
    <h1>Welcome to Our Rock & Mineral Shop!</h1>
    <div id="inventory">
        <!-- Inventory items will be dynamically added here -->
    </div>

    <script>
        fetch('/inventory')
            .then(res => res.json())
            .then(data => {
                const container = document.getElementById('inventory');
                data.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'item';
                    div.innerHTML = `<h2>${item.name}</h2>
                                     <p>${item.description}</p>
                                     <p class="price">$${item.price.toFixed(2)}</p>`;
                    container.appendChild(div);
                });
            });
    </script>
</body>
</html>
    ''')

@app.route('/inventory')
def get_inventory():
    return jsonify(inventory)

if __name__ == '__main__':
    app.run(debug=True)

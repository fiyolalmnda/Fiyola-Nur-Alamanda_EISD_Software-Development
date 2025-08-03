produk = {
    "TV": ("elektronik", 1000),
    "headphone": ("elektronik", 200),
    "baju": ("fashion", 50),
    "gitar": ("musik", 300),
    "sepatu": ("olahraga", 80),
    "kamera": ("elektronik", 600)
}

pelanggan = {
    "Rina": {
        "minat": ["elektronik", "musik"],
        "beli": ["TV", "headphone"]
    },
    "Budi": {
        "minat": ["fashion", "musik"],
        "beli": ["baju", "gitar"]
    },
    "Hartono": {
        "minat": ["olahraga", "elektronik"],
        "beli": ["sepatu", "kamera"]
    }
}

def rekomendasi(nama):
    data = pelanggan[nama]
    minat = data["minat"]
    sudah_beli = data["beli"]
    
    semua_produk_terkait = []

    for nama_produk, (kategori, _) in produk.items():
        if kategori in minat:
            semua_produk_terkait.append(nama_produk)

    return semua_produk_terkait

print("Rina:", rekomendasi("Rina"))
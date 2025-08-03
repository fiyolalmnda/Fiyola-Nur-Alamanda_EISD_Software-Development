def hitung_kembalian(pembayaran, belanja):
    kembalian = pembayaran - belanja
    pecahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    hasil = {}
    for i in pecahan:
        if kembalian >= i:
            jumlah = kembalian // i
            hasil[str(i)] = int(jumlah)
            kembalian -= i * jumlah
    return hasil

print(hitung_kembalian(10000, 7500))
print(hitung_kembalian(5000, 1100))
print(hitung_kembalian(178000, 90500))
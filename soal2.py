def cek_palindrom(kalimat):
    kalimat_bersih = ''.join(filter(str.isalnum, kalimat.lower()))
    if kalimat_bersih == kalimat_bersih[::-1]:
        return "eureeka!"
    else:
        return "suka blyat"
    
list_kalimat = ["Angsa", "KataK", "kasur empuk", "Aku Suka Kamu", "Ibu Ratna antar ubi"]

for kalimat in list_kalimat:
    print(f"{kalimat} -> {cek_palindrom(kalimat)}")
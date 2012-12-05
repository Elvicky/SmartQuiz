// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

// Edited by EHD Team © 2012

var quizJSON = {
    "info": {
        "name":    "Petunjuk:",
        "main":    "<p>Silahkan pilih jawaban yang menurut anda benar.<br>Jika jawaban berupa option, maka pilih 1 jawaban jawaban saja.<br>Jika jawaban berupa checkbox, selahkan pilih lebih dari 1 jawaban yang menurut anda jawaban yang benar</p>",
        "results": "<h5>Saran</h5><p>Itulah hasil yang anda dapat dari test ini. apapun yang skor yang anda dapat, jangan terburu-buru puas dengan hasil anda. terus tingkatkan hasil belajar anda. Semangat!!!.</p>",
        "level1":  "AMAZING!!!",
        "level2":  "Bagus",
        "level3":  "Cukup",
        "level4":  "Kurang",
        "level5":  "Buruk Sekali, tingkatkan belajarmu" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Shortcut yang digunakan untuk melakukan copy adalah ...",
            "a": [
                {"option": "ctrl+V",      "correct": false},
                {"option": "ctrl+S",     "correct": false},
                {"option": "ctrl+C",      "correct": true},
                {"option": "ctrl+B",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Benar Sekali</span> ctr+C merupakan perintah untuk mengCopy file ataupun tulisan dalam MS Word</p>",
            "incorrect": "<p><span>Ups Salah!!!</span> Ingat, huruf depan kata Copy menjdi kunci, maka dari itu shortcut untuk Copy menggunakan ctrl+C" // no comma here
        },
        { // Question 2
            "q": "File dengan ekstensi .txt bisa di buka di aplikasi ...",
            "a": [
                {"option": "Notepad",    "correct": true},
                {"option": "Wordpad",     "correct": true},
                {"option": "MS Word",      "correct": true},
                {"option": "MS Excel",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Yap, Anda benar!</span> Notepad Wordpad dan MS Word memang aplikasi yang bisa digunakan untuk membuka file tipe text!</p>",
            "incorrect": "<p><span>Fail.</span> Ingat, aplikasi yang bisa untuk membuka text adalah notepad wordpad dan MS Word. sedangkan MS Excel digunakan untuk perhitungan.</p>" // no comma here
        },
        { // Question 3
            "q": "Jenis file yang tidak dapat dibuka oleh aplikasi MS Word adalah ...",
            "a": [
                {"option": ".xls",        "correct": true},
                {"option": ".txt",           "correct": false},
                {"option": ".rtf",  "correct": false},
                {"option": ".odt",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> .txt, .rtf, .odt memang bisa dibuka di MS word karena berisifile berupa text.</p>",
            "incorrect": "<p><span>No.</span> Anda tidak akan bisa membuka .xls pada MS Word.</p>" // no comma here
        },
        { // Question 4
            "q": "Perintah pada MS Excel untuk melakukan penjumlahan adalah",
            "a": [
                {"option": "SUM",        "correct": true},
                {"option": "DIV",           "correct": false},
				{"option": "PLUS",    "correct": false},
                {"option": "SUB",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> Anda sangat hafal dengan rumus pada Microsoft Excel!</p>",
            "incorrect": "<p><span>ERRRR!</span> coba hafalkan lagi rumus-rumus pada MS Excel. yang benar adalah SUM</p>" // no comma here
        },
        { // Question 5
            "q": "Pada aplikasi MS Power Point, untuk menambahkan slide baru dilakukan dengan perintah ...",
            "a": [
                {"option": "tab Home >> New Slide",   "correct": true},
                {"option": "tab Insert >> New Slide",          "correct": false},
                {"option": "tab Review >> New Slide",  "correct": false},
                {"option": "tab View >> New Slide",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> pahami lagi mengenai menu bar, untuk menambahkan slide di kebanyakan aplikasi memang menggunakan menu home.</p>" // no comma here
        },
		{ // Question 6
            "q": "Menekan tombol ctrl+F2 secara bersamaan pada aplikasi Excel, Word maupun PowerPoint merupakan perintah untuk printpreview.",
            "a": [
                {"option": "Benar",   "correct": true},
                {"option": "Salah",         "correct": false},
                ],
            "correct": "<p><span>Yeah!</span> You're Amazing.</p>",
            "incorrect": "<p><span>No.</span> Coba di ingat lagi.</p>" // no comma here
        },
		{ // Question 7
            "q": "dari hal berikut ini, yang merupakan fasilitas editing dalam Word adalah ...",
            "a": [
                {"option": "Copy-Paste",   "correct": true},
                {"option": "Cut",          "correct": true},
                {"option": "Delete",  "correct": true},
                {"option": "Remove",  "correct": false} // no comma here
            ],
            "correct": "<p><span>OK Benar!</span> Anda cocok menjadi jurnalist.</p>",
            "incorrect": "<p><span>Salah.</span>dalam mengolah kata, yang bisa dilakukan adalah copy-paste, cut dan delete. bukan remove!!.</p>" // no comma here
        },
		{ // Question 8
            "q": "Media berikut yang bisa diinputkan sebagai media tambahan dalam Word adalah",
            "a": [
                {"option": "Gambar",   "correct": true},
                {"option": "Audio",          "correct": false},
                {"option": "Video",  "correct": false},
                {"option": "Screenshot",  "correct": true} // no comma here
            ],
            "correct": "<p><span>Tepat Sekali</span> file audio dan video tidak bisa ditampilkan dalam Word yang memang berfungsi sebagai pengolah kata.</p>",
            "incorrect": "<p><span>Kurang Tepat.</span>Word hanya bisa menginputkan file gambar dan screenshot yang secara tidak langsung berupa file gambar.</p>" // no comma here
        },
		{ // Question 9
            "q": "yang bukan pengformatan teks pada ms office adalah ...",
            "a": [
                {"option": "Underline",   "correct": false},
                {"option": "Bold",          "correct": false},
                {"option": "Upperline",  "correct": true},
                {"option": "Italic",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Sip!!!</span> Anda pintar sekali.</p>",
            "incorrect": "<p><span>kurang tepat.</span>teks pada MS Office hanya bisa di forat underline, bold dan italic..</p>" // no comma here
        },
		{ // Question 10
            "q": "Untuk menggabungkan 2 buah sel atau lebih pada MS Excel menggunakan perintah ...",
            "a": [
                {"option": "Combine",   "correct": false},
                {"option": "Merge & Center",          "correct": true},
                {"option": "Upgrade",  "correct": false},
                {"option": "Wrap Text",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Mantap!</span> Anda sangat paham sekali dengan Microsoft Excel.</p>",
            "incorrect": "<p><span>Maaf anda kurang tepat.</span> jawaban yang benar adalah Merge & Center.</p>" // no comma here
        }
    ]
};
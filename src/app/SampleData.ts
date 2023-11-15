const data = [
    {
        "id": "1",
        "name": "Thread 1",
        "content": "This is the content of Thread 1.",
        "balance": 100,
        "creator": "0x1234567890123456789012345678901234567890",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01",
            "0x4567890123456789012345678901234567890123"
        ],
        "dislikes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "commentsIds": ["comment1", "comment2"]
    },
    {
        "id": "2",
        "name": "Thread 2",
        "content": "This is the content of Thread 2.",
        "balance": 50,
        "creator": "0x7890123456789012345678901234567890123456",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [],
        "commentsIds": ["comment3"]
    },
    {
        "id": "3",
        "name": "Thread 3",
        "content": "This is the content of Thread 3.",
        "balance": 75,
        "creator": "0xabcdef0123456789abcdef0123456789abcdef01",
        "likes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "dislikes": [
            "0x7890123456789012345678901234567890123456"
        ],
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "commentsIds": ["comment4"]
    },
    {
        "id": "4",
        "name": "Thread 4",
        "content": "This is the content of Thread 4.",
        "balance": 120,
        "creator": "0x4567890123456789012345678901234567890123",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "dislikes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "commentsIds": ["comment5", "comment6"]
    },
    {
        "id": "5",
        "name": "Thread 5",
        "content": "This is the content of Thread 5.",
        "balance": 90,
        "creator": "0x7890123456789012345678901234567890123456",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [],
        "commentsIds": ["comment7"]
    },
    {
        "id": "6",
        "name": "Thread 6",
        "content": "This is the content of Thread 6.",
        "balance": 60,
        "creator": "0xabcdef0123456789abcdef0123456789abcdef01",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "dislikes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "commentsIds": ["comment8"]
    },
    {
        "id": "7",
        "name": "Thread 7",
        "content": "This is the content of Thread 7.",
        "balance": 110,
        "creator": "0x4567890123456789012345678901234567890123",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "dislikes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "commentsIds": ["comment9", "comment10"]
    },
    {
        "id": "8",
        "name": "Thread 8",
        "content": "This is the content of Thread 8.",
        "balance": 80,
        "creator": "0x1234567890123456789012345678901234567890",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [],
        "commentsIds": ["comment11"]
    },
    {
        "id": "9",
        "name": "Thread 9",
        "content": "This is the content of Thread 9.",
        "balance": 70,
        "creator": "0xabcdef0123456789abcdef0123456789abcdef01",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "dislikes": [],
        "commentsIds": ["comment12"]
    },
    {
        "id": "10",
        "name": "Thread 10",
        "content": "This is the content of Thread 10.",
        "balance": 95,
        "creator": "0x7890123456789012345678901234567890123456",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "commentsIds": ["comment13", "comment14"]
    },
    {
        "id": "11",
        "name": "Thread 11",
        "content": "This is the content of Thread 11.",
        "balance": 105,
        "creator": "0x4567890123456789012345678901234567890123",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "dislikes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "commentsIds": ["comment15"]
    },
    {
        "id": "12",
        "name": "Thread 12",
        "content": "This is the content of Thread 12.",
        "balance": 85,
        "creator": "0x1234567890123456789012345678901234567890",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "commentsIds": ["comment16", "comment17"]
    },
    {
        "id": "13",
        "name": "Thread 13",
        "content": "This is the content of Thread 13.",
        "balance": 65,
        "creator": "0x7890123456789012345678901234567890123456",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "commentsIds": ["comment18"]
    },
    {
        "id": "14",
        "name": "Thread 14",
        "content": "This is the content of Thread 14.",
        "balance": 115,
        "creator": "0xabcdef0123456789abcdef0123456789abcdef01",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "dislikes": [],
        "commentsIds": ["comment19", "comment20"]
    },
    {
        "id": "15",
        "name": "Thread 15",
        "content": "This is the content of Thread 15.",
        "balance": 75,
        "creator": "0x4567890123456789012345678901234567890123",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "dislikes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "commentsIds": ["comment21"]
    },
    {
        "id": "16",
        "name": "Thread 16",
        "content": "This is the content of Thread 16.",
        "balance": 100,
        "creator": "0x1234567890123456789012345678901234567890",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [],
        "commentsIds": ["comment22"]
    },
    {
        "id": "17",
        "name": "Thread 17",
        "content": "This is the content of Thread 17.",
        "balance": 80,
        "creator": "0x7890123456789012345678901234567890123456",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "commentsIds": ["comment23", "comment24"]
    },
    {
        "id": "18",
        "name": "Thread 18",
        "content": "This is the content of Thread 18.",
        "balance": 90,
        "creator": "0xabcdef0123456789abcdef0123456789abcdef01",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x4567890123456789012345678901234567890123"
        ],
        "dislikes": [],
        "commentsIds": ["comment25"]
    },
    {
        "id": "19",
        "name": "Thread 19",
        "content": "This is the content of Thread 19.",
        "balance": 110,
        "creator": "0x4567890123456789012345678901234567890123",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0x7890123456789012345678901234567890123456"
        ],
        "dislikes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "commentsIds": ["comment26", "comment27"]
    },
    {
        "id": "20",
        "name": "Thread 20",
        "content": "This is the content of Thread 20.",
        "balance": 95,
        "creator": "0x1234567890123456789012345678901234567890",
        imageUrl: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
        "likes": [
            "0xabcdef0123456789abcdef0123456789abcdef01"
        ],
        "dislikes": [],
        "commentsIds": ["comment28"]
    }
]

export default data;
use expense_db;
db.expenses.remove({});

db.expenses.insert(
    [
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be256"),
            "updatedAt" : ISODate("2018-04-19T00:56:48.668Z"),
            "createdAt" : ISODate("2018-04-19T00:56:48.668Z"),
            "title" : "Uber",
            "amount" : 75,
            "status" : 1,
            "description" : "Uber to SFO",
            "username" : "Kim"
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be257"),
            "updatedAt" : ISODate("2012-04-19T00:56:48.669Z"),
            "createdAt" : ISODate("2014-05-19T00:56:48.669Z"),
            "title" : "Uber",
            "amount" : 100,
            "status" : 1,
            "description" : "Uber to San Jose",
            "username" : "Josh"
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be255"),
            "updatedAt" : ISODate("2013-04-19T00:56:48.667Z"),
            "createdAt" : ISODate("2015-04-19T00:56:48.667Z"),
            "title" : "Meals",
            "amount" : 150,
            "status" : 1,
            "description" : "Dinner with customer",
            "username" : "Kim"
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be258"),
            "updatedAt" : ISODate("2013-04-19T00:56:48.669Z"),
            "createdAt" : ISODate("2014-04-19T00:56:48.669Z"),
            "title" : "Flight",
            "amount" : 1200,
            "status" : 0,
            "description" : "SFO to New Delhi",
            "username" : "Kiran"
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be259"),
            "updatedAt" : ISODate("2017-04-19T00:56:48.669Z"),
            "createdAt" : ISODate("2018-12-19T00:56:48.669Z"),
            "title" : "Miscelaneous",
            "amount" : 55,
            "status" : 0,
            "description" : "Other expenses",
            "username" : "Raj"
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be25d"),
            "updatedAt" : ISODate("2012-02-19T00:56:48.670Z"),
            "createdAt" : ISODate("2010-01-19T00:56:48.670Z"),
            "title" : "Audit",
            "amount" : 15000,
            "status" : 1,
            "description" : "Audit expenses for department",
            "username" : "Michael"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be25c"),
            "updatedAt" : ISODate("2013-10-19T00:56:48.670Z"),
            "createdAt" : ISODate("2011-11-19T00:56:48.670Z"),
            "title" : "Exhibition",
            "amount" : 450,
            "status" : 0,
            "description" : "Posters and other",
            "username" : "Leslie"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be25b"),
            "updatedAt" : ISODate("2009-01-19T00:06:48.670Z"),
            "createdAt" : ISODate("2008-04-19T00:56:48.670Z"),
            "title" : "Insurance",
            "amount" : 1700,
            "status" : 0,
            "description" : "Travel insurance",
            "username" : "Michael"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be25e"),
            "updatedAt" : ISODate("2016-04-19T00:56:48.671Z"),
            "createdAt" : ISODate("2015-01-19T00:36:48.671Z"),
            "title" : "Rent",
            "amount" : 134000,
            "status" : 0,
            "description" : "Annual rent for office",
            "username" : "Michael"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be25a"),
            "updatedAt" : ISODate("2001-04-19T00:06:48.670Z"),
            "createdAt" : ISODate("2009-06-19T00:56:48.670Z"),
            "title" : "Utilities",
            "amount" : 900,
            "status" : 0,
            "description" : "Monthly utility bill for March",
            "username" : "John"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be262"),
            "updatedAt" : ISODate("2013-02-19T00:56:48.672Z"),
            "createdAt" : ISODate("2011-07-19T00:56:48.672Z"),
            "title" : "Flight",
            "amount" : 450,
            "status" : 1,
            "description" : "To New York",
            "username" : "Kiran"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be261"),
            "updatedAt" : ISODate("2012-01-19T00:56:48.671Z"),
            "createdAt" : ISODate("2011-09-19T00:56:48.671Z"),
            "title" : "Computers",
            "amount" : 9450,
            "status" : 1,
            "description" : "Computers for office",
            "username" : "Joel"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be260"),
            "updatedAt" : ISODate("2013-04-19T00:56:48.671Z"),
            "createdAt" : ISODate("2014-04-19T00:56:48.671Z"),
            "title" : "Printer",
            "amount" : 245,
            "status" : 1,
            "description" : "Network printer",
            "username" : "Joel"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be263"),
            "updatedAt" : ISODate("2018-04-29T00:56:48.672Z"),
            "createdAt" : ISODate("2018-01-09T00:56:48.672Z"),
            "title" : "Entertainment",
            "amount" : 856,
            "status" : 0,
            "description" : "Quarterly office party",
            "username" : "Ellen"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be25f"),
            "updatedAt" : ISODate("2011-04-19T00:56:48.671Z"),
            "createdAt" : ISODate("2010-11-09T00:56:48.671Z"),
            "title" : "Ping pong table",
            "amount" : 845,
            "status" : 0,
            "description" : "Ping pong table for office",
            "username" : "Jim"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be267"),
            "updatedAt" : ISODate("2016-10-19T00:56:48.673Z"),
            "createdAt" : ISODate("2015-08-09T00:56:48.673Z"),
            "title" : "Conference",
            "amount" : 45000,
            "status" : 1,
            "description" : "Annual user conference",
            "username" : "Jack"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be266"),
            "updatedAt" : ISODate("2018-04-19T00:56:48.673Z"),
            "createdAt" : ISODate("2012-01-20T00:56:48.673Z"),
            "title" : "Telephone",
            "amount" : 543,
            "status" : 0,
            "description" : "Telephone bill for March",
            "username" : "Trevor"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be265"),
            "updatedAt" : ISODate("2010-01-10T00:56:48.672Z"),
            "createdAt" : ISODate("2009-03-01T00:56:48.672Z"),
            "title" : "Parking",
            "amount" : 75,
            "status" : 0,
            "description" : "Parking for event",
            "username" : "murphy"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be268"),
            "updatedAt" : ISODate("2012-12-19T00:56:48.675Z"),
            "createdAt" : ISODate("2011-01-19T00:56:48.675Z"),
            "title" : "Payroll",
            "amount" : 255600,
            "status" : 1,
            "description" : "April payroll",
            "username" : "Luba"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be264"),
            "updatedAt" : ISODate("2013-04-09T00:56:48.672Z"),
            "createdAt" : ISODate("2011-01-20T00:56:48.672Z"),
            "title" : "Car rental",
            "amount" : 195,
            "status" : 1,
            "description" : "Hertz car rental",
            "username" : "jack"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be26c"),
            "updatedAt" : ISODate("2010-04-19T00:56:48.676Z"),
            "createdAt" : ISODate("2009-01-09T00:56:48.676Z"),
            "title" : "Refreshments",
            "amount" : 250,
            "status" : 1,
            "description" : "Refreshments for office",
            "username" : "Natalie"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be26b"),
            "updatedAt" : ISODate("2018-01-25T00:56:48.675Z"),
            "createdAt" : ISODate("2011-02-05T00:56:48.675Z"),
            "title" : "Hotel",
            "amount" : 650,
            "status" : 1,
            "description" : "Stay in Washington",
            "username" : "Omar"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be26a"),
            "updatedAt" : ISODate("2011-04-08T00:56:48.675Z"),
            "createdAt" : ISODate("2010-02-01T00:56:48.675Z"),
            "title" : "Television",
            "amount" : 850,
            "status" : 0,
            "description" : "Samsung TV",
            "username" : "Elliot"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be26d"),
            "updatedAt" : ISODate("2010-04-09T00:56:48.676Z"),
            "createdAt" : ISODate("2009-01-01T00:56:48.676Z"),
            "title" : "Pyrometer",
            "amount" : 500,
            "status" : 1,
            "description" : "pyrometer",
            "username" : "Facilities"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be269"),
            "updatedAt" : ISODate("2017-04-09T00:56:48.675Z"),
            "createdAt" : ISODate("2011-01-29T00:56:48.675Z"),
            "title" : "Landscaping",
            "amount" : 25000,
            "status" : 0,
            "description" : "Landscaping around office",
            "username" : "Cruz"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be271"),
            "updatedAt" : ISODate("2017-04-09T00:56:48.678Z"),
            "createdAt" : ISODate("2011-01-04T00:56:48.678Z"),
            "title" : "Stationary",
            "amount" : 855,
            "status" : 1,
            "description" : "office supplies and more",
            "username" : "Trevor"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be270"),
            "updatedAt" : ISODate("2011-04-30T00:56:48.677Z"),
            "createdAt" : ISODate("2010-01-01T00:56:48.677Z"),
            "title" : "Thumbtack",
            "amount" : 540,
            "status" : 0,
            "description" : "Moving the office",
            "username" : "Ellen"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be26f"),
            "updatedAt" : ISODate("2011-04-30T00:56:48.677Z"),
            "createdAt" : ISODate("2003-12-12T00:56:48.677Z"),
            "title" : "Entertainment",
            "amount" : 950,
            "status" : 1,
            "description" : "A's game with customer",
            "username" : "Jack"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be272"),
            "updatedAt" : ISODate("2013-04-30T00:56:48.678Z"),
            "createdAt" : ISODate("2010-01-31T00:56:48.678Z"),
            "title" : "Supplies",
            "amount" : 340,
            "status" : 0,
            "description" : "Costco supplies",
            "username" : "Jill"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be26e"),
            "updatedAt" : ISODate("2014-04-02T00:56:48.677Z"),
            "createdAt" : ISODate("2010-04-03T00:56:48.677Z"),
            "title" : "Uber",
            "amount" : 24,
            "status" : 0,
            "description" : "Uber to Fremont",
            "username" : "Tim"        
        },
        {
            "_id" : ObjectId("5ad7e950b48ef0439c6be273"),
            "updatedAt" : ISODate("2012-04-19T00:56:48.679Z"),
            "createdAt" : ISODate("2011-03-09T00:56:48.679Z"),
            "title" : "Lyft",
            "amount" : 55,
            "status" : 0,
            "description" : "Lyft to Palo Alto",
            "username" : "Hana"        
        }
    ]
);

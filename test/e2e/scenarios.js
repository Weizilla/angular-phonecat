describe("PhoneCat App", function() {
    describe("Phone list view", function() {
        var phoneList;
        var query;

        beforeEach(function() {
            browser.get("app/index.html");
        });

        beforeEach(function() {
            phoneList = element.all(by.repeater("phone in ctrl.phones"));
            query = element(by.model("ctrl.query"));
        });

        it("should filter the phone list as a user types into the search box", function() {
            expect(phoneList.count()).toBe(3);

            query.sendKeys("nexus");
            expect(phoneList.count()).toBe(1);

            query.clear();
            query.sendKeys("motorola");
            expect(phoneList.count()).toBe(2);
        });

        it("should display the current filter value in the title bar", function() {
            query.clear();
            expect(browser.getTitle()).toMatch(/Google Phone Gallery:\s*$/);

            query.sendKeys("nexus");
            expect(browser.getTitle()).toMatch(/Google Phone Gallery: nexus$/);
        });

        it("should be possible to control phone order via drop down select box", function() {
            // space required for search text in column.() because tag in index.html has space:
            // <span>{{ phone.name }}</span>. Seems to be fixed in later version where spaces do
            // not matter
            var phoneNameColumn =
                element.all(by.repeater("phone in ctrl.phones").column(" phone.name "));

            function getNames() {
                return phoneNameColumn.map(function(e) {
                    return e.getText();
                });
            }

            expect(phoneNameColumn.count()).toBe(3);

            query.sendKeys("tablet");
            expect(getNames()).toEqual([
                "Motorola XOOM\u2122 with Wi-Fi",
                "MOTOROLA XOOM\u2122"
            ]);

            element(by.model("ctrl.orderProp")).element(by.css("option[value='name']")).click();
            expect(getNames()).toEqual([
                "MOTOROLA XOOM\u2122",
                "Motorola XOOM\u2122 with Wi-Fi"
            ]);
        });
    });
});
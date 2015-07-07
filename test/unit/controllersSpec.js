describe("PhoneListCtrl", function() {
    var ctrl;

    beforeEach(module("phoneCatApp"));

    beforeEach(inject(function($controller) {
        ctrl = $controller("PhoneListCtrl");
    }));

    it("should create phones model with 3 phones", function() {
        expect(ctrl.phones.length).toBe(3);
    });

    it("should set the default value of orderProp model", function() {
        expect(ctrl.orderProp).toBe("age");
    });
});
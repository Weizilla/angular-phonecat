describe("PhoneListCtrl", function() {
    beforeEach(module("phoneCatApp"));

    it("should create phones model with 3 phones", inject(function($controller) {
        var ctrl = $controller("PhoneListCtrl");
        expect(ctrl.phones.length).toBe(3);
    }));
});
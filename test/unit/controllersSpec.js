describe("PhoneListCtrl", function() {
    var ctrl, $httpBackend;

    beforeEach(module("phoneCatApp"));

    beforeEach(inject(function(_$httpBackend_, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET("phones/phones.json")
            .respond([ {name: "Nexus S"}, {name: "Motorola DROID"} ]);
        ctrl = $controller("PhoneListCtrl");
    }));

    it("should create phones model with 3 phones", function() {
        expect(ctrl.phones).toBeUndefined();
        $httpBackend.flush();
        expect(ctrl.phones).toEqual([{name: "Nexus S"}, {name: "Motorola DROID"}])
    });

    it("should set the default value of orderProp model", function() {
        expect(ctrl.orderProp).toBe("age");
    });
});
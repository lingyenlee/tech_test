import { findByTestAttr } from "../testUtil"
import { NavBar } from "../NavBar"

const setUp = () => {
    const component = shallow(<NavBar />)
    return component
}

describe("Nav Bar component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it("should render without error", () => {
        const wrapper = findByTestAttr(component, "navBar");
        expect(wrapper.length).toBe(1);
    })

    it("should render 3 logos", () => {
        const wrapper = findByTestAttr(component, "logoIMG");
        expect(wrapper.length).toBe(3)
    })

})
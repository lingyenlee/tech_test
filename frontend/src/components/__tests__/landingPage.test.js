import { LandingPage } from "../LandingPage"
import { findByTestAttr } from "../testUtil"

const setUp = () => {
    const component = shallow(<LandingPage />)
    return component
}

describe("Landing Page Component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it("should render without error", () => {
        const wrapper = findByTestAttr(component, "landingPageComponent");
        expect(wrapper.length).toBe(1);
    })
    it("should render 2 logos", () => {
        const wrapper = findByTestAttr(component, "logoIMG");
        expect(wrapper.length).toBe(2)
    })
})
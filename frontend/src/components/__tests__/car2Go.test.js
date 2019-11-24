import mockAxios from "axios"
import { fetchCar2GoData, Car2GoContainer } from "../Car2Go"
import { findByTestAttr } from "../testUtil"

const setUp = () => {
    const component = shallow(<Car2GoContainer />)
    return component
}

describe("Car2GoComponent", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it("should render without error", () => {
        const wrapper = findByTestAttr(component, "car2GoComponent");
        expect(wrapper.length).toBe(1);
    })

    it("should call the fetchCar2GoData function", async () => {
        //setup test
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    placemarks: [{ "id": 1 }]
                }
            }));
        //run code for test
        const result = await fetchCar2GoData()

        // expected outcomes
        expect(result).toEqual([{ "id": 1 }])
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith("/car2go/vehicles")
    })

})

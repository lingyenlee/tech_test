import mockAxios from "axios"
import { fetchMyTaxiData, MyTaxiContainer } from "../MyTaxi"
import { findByTestAttr } from "../testUtil"

const setUp = () => {
    const component = shallow(<MyTaxiContainer />)
    return component
}

describe("MyTaxi Component", () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it("should render without error", () => {
        const wrapper = findByTestAttr(component, "myTaxiComponent");
        expect(wrapper.length).toBe(1);
    })

    it("should call the fetchMyTaxiData function", async () => {
        //setup test
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    poiList: [{ "id": 1 }]
                }
            }));
        //run code for test
        const result = await fetchMyTaxiData()

        // expected outcomes
        expect(result).toEqual([{ "id": 1 }])
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith("/mytaxi/vehicles")
    })

})
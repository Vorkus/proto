export default class MockData {
    static #mockData = [
        {
            id: "5",
            imageUrl: "/preview-images/5/5.jpeg",
            title: "Hydria apothecary vase",
        },
        {
            id: "2",
            imageUrl: "/preview-images/2/2.jpeg",
            title: "Sculpture “Bust of Róża Loewenfeld”",
        },
        {
            id: "4",
            imageUrl: "/preview-images/4/4.jpeg",
            title: "Violin",
        },
        {
            id: "3",
            imageUrl: "/preview-images/3/3.jpeg",
            title: "Priest Karol Wojtyła’s sports shoes",
        },
        {
            id: "1",
            imageUrl: "/preview-images/1/1.jpeg",
            title: "Apollo and Daphne",
        },
        {
            id: "11",
            imageUrl: "/preview-images/11/11.jpeg",
            title: "Netsuke - Snake curled around a turtle",
        },
        {
            id: "6",
            imageUrl: "/preview-images/6/6.jpeg",
            title: "Shengding Food Vessel, around 575 BCE",
        },
        {
            id: "7",
            imageUrl: "/preview-images/7/7.jpeg",
            title: "Water-Moon Guanyin",
        },
        {
            id: "8",
            imageUrl: "/preview-images/8/8.jpeg",
            title: "Orbiter Space Shuttle OV-103 Discovery",
        },
        {
            id: "9",
            imageUrl: "/preview-images/9/9.jpeg",
            title: "Coptic prayer book",
        },
        {
            id: "10",
            imageUrl: "/preview-images/10/10.jpeg",
            title: "Löwe",
        },
    ];

    static getData(id = null) {
        if (id) {
            const index = MockData.#mockData.map(e => e.id).indexOf(id);

            return MockData.#mockData[index];
        }

        return MockData.#mockData;
    }

    static getNextId(id) {
        let nextIndex = MockData.#mockData.map(e => e.id).indexOf(id) + 1;

        if (nextIndex === MockData.#mockData.length) {
            return null;
        }

        return MockData.#mockData[nextIndex].id;
    }

    static getPreviousId(id) {
        let previousIndex = MockData.#mockData.map(e => e.id).indexOf(id) - 1;

        if (previousIndex < 0) {
            return null;
        }

        return MockData.#mockData[previousIndex].id;
    }
}
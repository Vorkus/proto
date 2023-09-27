export default class MockData {
    static #mockData = [
        {
            id: "12",
            imageUrl: "/proto/preview-images/12/12.jpeg",
            title: "Animated triceratops skeleton",
            modelData: {
                url: "/proto/3d_models/12/scene.gltf",
                shadows: false,
                frameloop: "always",
                hasAnimations: true,
            },
        },
        {
            id: "5",
            imageUrl: "/proto/preview-images/5/5.jpeg",
            title: "Hydria apothecary vase",
            modelData: {
                url: "/proto/3d_models/5/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "2",
            imageUrl: "/proto/preview-images/2/2.jpeg",
            title: "Emblem of “The Golden Head” pharmacy in Kraków",
            modelData: {
                url: "/proto/3d_models/2/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "4",
            imageUrl: "/proto/preview-images/4/4.jpeg",
            title: "Violin",
            modelData: {
                url: "/proto/3d_models/4/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "3",
            imageUrl: "/proto/preview-images/3/3.jpeg",
            title: "Priest Karol Wojtyła’s sports shoes",
            modelData: {
                url: "/proto/3d_models/3/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "1",
            imageUrl: "/proto/preview-images/1/1.jpeg",
            title: "Apollo and Daphne",
            modelData: {
                url: "/proto/3d_models/1/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "11",
            imageUrl: "/proto/preview-images/11/11.jpeg",
            title: "Netsuke - Snake curled around a turtle",
            modelData: {
                url: "/proto/3d_models/11/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "6",
            imageUrl: "/proto/preview-images/6/6.jpeg",
            title: "Shengding Food Vessel, around 575 BCE",
            modelData: {
                url: "/proto/3d_models/6/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "7",
            imageUrl: "/proto/preview-images/7/7.jpeg",
            title: "Water-Moon Guanyin",
            modelData: {
                url: "/proto/3d_models/7/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "8",
            imageUrl: "/proto/preview-images/8/8.jpeg",
            title: "Orbiter Space Shuttle OV-103 Discovery",
            modelData: {
                url: "/proto/3d_models/8/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "9",
            imageUrl: "/proto/preview-images/9/9.jpeg",
            title: "Coptic prayer book",
            modelData: {
                url: "/proto/3d_models/9/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
        {
            id: "10",
            imageUrl: "/proto/preview-images/10/10.jpeg",
            title: "Löwe",
            modelData: {
                url: "/proto/3d_models/10/scene.gltf",
                shadows: "contact",
                frameloop: "demand",
                hasAnimations: false,
            },
        },
    ];

    static getModelData(id)  {
        if (id) {
            const index = MockData.#mockData.map(e => e.id).indexOf(id);

            if (-1 !== index) {
                return MockData.#mockData[index];
            }
        }

        return null;
    }

    static getAllData() {
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
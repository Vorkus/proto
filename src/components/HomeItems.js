import {Scroll} from "@react-three/drei";
import HomeItem from "./HomeItem";
import {useThree} from "@react-three/fiber";

export default function HomeItems() {
    const { width: w, height: h } = useThree((state) => state.viewport)

    return (
        <Scroll>
            <HomeItem url="/proto/preview-images/1/1.jpg" scale={[w / 4, w / 4, 1]} position={[-w / 6, 0, 0]}/>
            {/*<HomeItem url="/preview-images/2/2.jpeg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} />*/}
            {/*<HomeItem url="/preview-images/3/3.jpeg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 1, 0]} />*/}
            {/*<HomeItem url="/preview-images/4/4.jpeg" scale={[w / 5, w / 5, 1]} position={[w / 4, -h * 1.2, 0]} />*/}
            {/*<HomeItem url="/preview-images/5/5.jpeg" scale={[w / 5, w / 5, 1]} position={[w / 10, -h * 1.75, 0]} />*/}
            {/*<HomeItem url="/preview-images/6/6.jpeg" scale={[w / 3, w / 3, 1]} position={[-w / 4, -h * 2, 0]} />*/}
            {/*<HomeItem url="/preview-images/7/7.jpeg" scale={[w / 3, w / 5, 1]} position={[-w / 4, -h * 2.6, 0]} />*/}
            {/*<HomeItem url="/preview-images/8/8.jpeg" scale={[w / 2, w / 2, 1]} position={[w / 4, -h * 3.1, 0]} />*/}
            {/*<HomeItem url="/preview-images/9/9.jpeg" scale={[w / 2.5, w / 2, 1]} position={[-w / 6, -h * 4.1, 0]} />*/}
        </Scroll>
    )
}
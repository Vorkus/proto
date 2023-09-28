import {Scroll} from "@react-three/drei";
import HomeItem from "./HomeItem";
import {useThree} from "@react-three/fiber";

export default function HomeItems() {
    const { width: w, height: h } = useThree((state) => state.viewport)

    return (
        <Scroll>
            <HomeItem
                url="/proto/home/1/1.jpeg"
                scale={[w / 4, h / 1.5, 1]}
                position={[-w / 3.5, h / 50, 0]}
                maxScale={[ w / 5, h / 1.75]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/8/8.jpeg"
                scale={[w / 5, h / 4, 1]}
                position={[w / 25, -h/ 5.3, 0]}
                maxScale={[w / 3.5, h / 2.5]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/10/10.jpeg"
                scale={[w/8, h / 1.5, 1]}
                position={[w / 3, h / 50, 0]}
                maxScale={[w/4.5, h/1.5]}
                grayscale={0}
            />

            {/* Page 2 */}
            <HomeItem
                url="/proto/home/3/3.jpeg"
                scale={[w / 3, h / 2, 1]}
                position={[-w / 4, -0.85 * h, 0]}
                maxScale={[w/3, h/1.75]}
                grayscale={1}
            />
            <HomeItem
                url="/proto/home/2/2.jpeg"
                scale={[w/8, h / 1.5, 1]}
                position={[w / 40, -h, 0]}
                maxScale={[w/8, h/2.5]}
                grayscale={1}
            />
            <HomeItem
                url="/proto/home/4/4.jpeg"
                scale={[w / 3, h / 2, 1]}
                position={[0.3 * w, 1.15* -h, 0]}
                maxScale={[w/3, h/1.75]}
                grayscale={1}
            />

            {/* Page 3 */}
            <HomeItem
                url="/proto/home/5/5.jpeg"
                scale={[w / 4, h / 2.5, 1]}
                position={[-w / 3, -h * 1.80, 0]}
                maxScale={[w/3.75, h/2.25]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/7/7.jpeg"
                scale={[w / 4, h / 2.5, 1]}
                position={[-w / 3, -h* 2.30, 0]}
                maxScale={[w/3.75, h/2.25]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/9/9.jpeg"
                scale={[w / 4, h / 2.5, 1]}
                position={[-w/100 , -h * 1.80, 0]}
                maxScale={[w/3.75, h/2.25]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/11/11.jpeg"
                scale={[w / 4, h / 2.5, 1]}
                position={[-w / 100, -h * 2.30, 0]}
                maxScale={[w/3.75, h/2.25]}
                grayscale={0}
            />
            <HomeItem
                url="/proto/home/6/6.jpeg"
                scale={[w / 4, h / 2, 1]}
                position={[w / 3.25, -h * 2, 0]}
                maxScale={[w/3.75, h/2.25]}
                grayscale={0}
            />
        </Scroll>
    )
}
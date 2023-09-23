import ModelCard from "./ModelCard";
import '../assets/Catalog.css';
import VisualizationModal from "./VisualizationModal";
import {useState} from "react";
import MockData from "./MockData";

export default function Catalog() {
    const [modalData, setModalData] = useState({});

    function handleCardClick(event) {
        updateModalData(event.currentTarget.id);
    }

    function updateModalData(id) {
        const itemData = MockData.getData(id);
        setModalData({
            show: true,
            title: itemData.title,
            modelUrl: `/3d_models/${id}/scene.gltf`,
            nextId: MockData.getNextId(id),
            previousId: MockData.getPreviousId(id),
        });
    }

    return (
        <section className={ 'container-fluid no-gutters model-section' }>
            <VisualizationModal
                updateModalData={updateModalData}
                modalData={modalData}
                onHide={() => setModalData({show: false})}
                onNext={() => updateModalData(modalData.nextId)}
                onPrevious={() => updateModalData(modalData.previousId)}
            />
            <div className={'row pb-2'}>
                <h2 className={'text-start'}>360º Preview models</h2>
                <hr />
            </div>
            <div className={ 'row' }>
                {
                    MockData.getData().map(data => (
                        <div
                            key={crypto.randomUUID()}
                            className={ 'col-md-3 col-12 pb-4' }
                        >
                            <ModelCard
                                modelData={{
                                    id: data.id,
                                    title: data.title,
                                    imageUrl: data.imageUrl,
                                }}
                                handleClick={handleCardClick}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
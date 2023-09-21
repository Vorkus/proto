import ModelCard from "./ModelCard";

export default function Catalog() {
    return (
        <section className={ 'container-fluid no-gutters' }>
            <div className={ 'row' }>
                <div className={ 'col-4 g-0' }>
                    <ModelCard />
                </div>
                {/*<div className={ 'col-4 g-0' }>*/}
                {/*    <ModelCard />*/}
                {/*</div>*/}
                {/*<div className={ 'col-4 g-0' }>*/}
                {/*    <ModelCard />*/}
                {/*</div>*/}
            </div>
        </section>
    );
}
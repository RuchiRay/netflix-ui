import { Row } from "@/components/Row/Row";
import { requests } from "@/request";
import React from "react";

const Tv = () => {
  return (
    <div>
      <Row
        type="tv"
        title="Comedy"
        fetchUrl={requests.fetchComedySeries}
        id="CO"
        key="CO"
      />
      <Row
        type="tv"
        title="Animation"
        fetchUrl={requests.fetchAnimationSeries}
        id="AN"
      />
      <Row
        type="tv"
        title="For Kids"
        fetchUrl={requests.fetchKidsSeries}
        id="KS"
      />
      <Row
        type="tv"
        title="Family"
        fetchUrl={requests.fetchFamilySeries}
        id="KS"
      />
      <Row
        type="tv"
        title="Exciting crime tv series"
        fetchUrl={requests.fetchCrimeSeries}
        id="CS"
        key="CS"
      />
      <Row
        type="tv"
        title="Sci Fi and Fantasy"
        fetchUrl={requests.fetchSciFiFantasySeries}
        id="CS"
        key="CSF"
      />

      <Row
        type="tv"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentarySeries}
        id="CS"
        key="DC"
      />
    </div>
  );
};

export default Tv;

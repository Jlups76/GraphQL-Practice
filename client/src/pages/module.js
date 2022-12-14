import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, QueryResult, ModuleDetail } from "../components";

const GET_MODULE = gql`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
      }
    }
  }
`;

const Module = ({ trackId, moduleId }) => {
  const { loading, error, data } = useQuery(GET_MODULE, {
    variables: { trackId, moduleId },
  });
  return (
    <Layout fullWidth={true}>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;

type QueryParametersData = {
    [key: string]: string | boolean | number;
};
declare const query_parameters: (mini_app_id: string, data: QueryParametersData) => string;
export default query_parameters;

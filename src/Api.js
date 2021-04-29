import { university_data, countries_data } from "./dummy";
export const Api = {
  getUniversities(search = null, filters = null) {
    let result = university_data;
    if (search) {
      result = result.filter((university) => {
        return university.name.toLowerCase().includes(search);
      });
    }
    if (filters?.length) {
      result = result.filter((university) => {
        return filters.includes(university.alpha_two_code);
      });
    }
    return result;
  },
  getFilters() {
    return countries_data;
  },
};

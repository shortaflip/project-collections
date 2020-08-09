/**
 * All non-null assertions are related to countries, since any country related operations takes the country
 * from the API and is sure to exist.
 */

import { ActionContext } from 'vuex'
import { covidEP } from '../shared/constants/'
import { CovidData, CovidGeneralInfo } from '../types/'

interface RootState {
  value: string;
}

interface CovidState {
  selectedCovidData: CovidData;
  covidDataAllCountries: CovidData[];
}

export const covid = {
  state: () => ({
    selectedCovidData: {} as CovidData,
    covidDataAllCountries: [] as CovidData[]
  }),
  getters: {
    getCovidGeneralInfo: (state: CovidState): CovidGeneralInfo => {
      const data: CovidData = state.selectedCovidData

      return {
        country: data.country,
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered,
        tests: data.tests,
        updated: data.updated,
        casesToday: data.todayCases
      }
    },

    getAllAffectedCountries: (state: CovidState): string[] =>
      state.covidDataAllCountries.map((data: CovidData): string => data.country!)
  },
  mutations: {
    setSelectedCovidData: (state: CovidState, country: string): void => {
      state.selectedCovidData = state.covidDataAllCountries
        .find((data: CovidData): boolean => data.country!.toLowerCase().includes(country.toLowerCase()))!
    },

    setCovidDataAllCountries: (state: CovidState, data: CovidData[]): void => {
      state.covidDataAllCountries = data
    }
  },
  actions: {
    /**
     * Gets covid data for all countries and sets the default selected covid data.  Should be prior choice or
     * location, respectively.  Currently set to USA, will change.
     */
    getCovidDataAllCountries: async ({ commit }: ActionContext<RootState, RootState>): Promise<void> => {
      const res = await fetch(covidEP.COVID_API_BASE_URL + covidEP.COVID_API_ALL_COUNTRIES)
      const data = await res.json()
      commit('setCovidDataAllCountries', data)
      commit('setSelectedCovidData', 'USA')
    }
  }
}

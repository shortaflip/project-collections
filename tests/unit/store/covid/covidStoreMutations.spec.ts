import { expect } from 'chai'
import { CovidState, CovidCountryData } from '@/types'
import { state, mutations } from '@/store/covid'
import { covidStateMocks, covidConstants } from './covidMocks'

const { setSelectedCovidCountryData, setCovidVaccineCountryData } = mutations

let covidState: CovidState = state()

describe('Covid Store mutations', (): void => {
  afterEach((): void => {
    covidState = state()
  })

  it('will set selected covid country data to appropriate country covid data when selectedCountry is mutated', (): void => {
    covidState.covidCountryData = covidStateMocks.generateCovidDataAllCountries()
    covidState.selectedCountry = covidConstants.affectedCountries[0].name

    setSelectedCovidCountryData(covidState)
    expect(covidState.selectedCovidCountryData).to.eql(covidState.covidCountryData[0])
  })

  it('will set covid vaccinated data for each country', (): void => {
    const countryVaccinated = covidStateMocks.generateVaccinatedCountryMap()
    covidState.covidCountryData = covidStateMocks.generateCovidDataAllCountries()
    setCovidVaccineCountryData(covidState, countryVaccinated)

    const expected = covidState.covidCountryData.map((data: CovidCountryData): number => data.vaccinated as number)
    const actual = [...countryVaccinated.values()]
    expect(expected).to.eql(actual)
  })
})

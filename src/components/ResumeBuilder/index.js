import {Component} from 'react'

import ExperienceDetails from '../ExperienceDetails'
import EducationDetails from '../EducationDetails'
import SkillsSection from '../SkillsSection'

import './index.css'

const list = [0]

class ResumeBuilder extends Component {
  state = {edList: list, exList: list, skList: list}

  addExperienceField = () => {
    const {exList} = this.state
    const newItem = exList.length
    this.setState(prevState => ({
      exList: [...prevState.exList, newItem],
    }))
  }

  addEducationField = () => {
    const {edList} = this.state
    const newItem = edList.length
    this.setState(prevState => ({
      edList: [...prevState.edList, newItem],
    }))
  }

  addSkillField = () => {
    const {skList} = this.state
    const newItem = skList.length
    this.setState(prevState => ({
      skList: [...prevState.skList, newItem],
    }))
  }

  render() {
    const {edList, exList, skList} = this.state

    return (
      <div className="bg_container">
        <h1 className="mainheading">Resume Builder</h1>
        <div className="inputBoxesContainer">
          <div className="nameEmailContainer">
            <div className="nameContainer">
              <label htmlFor="nameInputId" className="nameLabel">
                Name
              </label>
              <input id="nameInputId" type="text" className="nameInputBox" />
            </div>
            <div className="emailContainer">
              <label htmlFor="emailInputId" className="nameLabel">
                Email
              </label>
              <input id="emailInputId" type="text" className="nameInputBox" />
            </div>
          </div>

          <div>
            <div className="addressContainer">
              <label htmlFor="addressInputId" className="nameLabel">
                Address
              </label>
              <textarea id="addressInputId" type="text" cols="45" rows="8" />
            </div>
            <div className="phoneContainer">
              <label htmlFor="phoneInputId" className="nameLabel">
                Phone
              </label>
              <input id="phoneInputId" type="text" className="nameInputBox" />
            </div>
          </div>
        </div>

        <div className="experienceContainer">
          <h1 className="experienceHeading">Experience</h1>
          <ul>
            {exList.map(eachItem => (
              <ExperienceDetails key={eachItem} />
            ))}
          </ul>
          <div className="addExButtonContainer">
            <button
              type="button"
              className="addExButton"
              onClick={this.addExperienceField}
            >
              + Add
            </button>
          </div>
        </div>

        <div className="educationContainer">
          <h1 className="educationHeading">Education</h1>
          <ul>
            {edList.map(eachItem => (
              <EducationDetails key={eachItem} />
            ))}
          </ul>
          <div className="addEdButtonContainer">
            <button
              type="button"
              className="addEdButton"
              onClick={this.addEducationField}
            >
              + Add
            </button>
          </div>
        </div>

        <div className="skillContainer">
          <h1 className="skillHeading">Skills</h1>
          <div className="skillInputButtonContainer">
            <ul>
              <label htmlFor="skillId" className="skillLabel">
                Add your Skill
              </label>
              {skList.map(eachItem => (
                <SkillsSection key={eachItem} />
              ))}
            </ul>
            <div className="addSkButtonContainer">
              <button
                type="button"
                className="addSkButton"
                onClick={this.addSkillField}
              >
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResumeBuilder

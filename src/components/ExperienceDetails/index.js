import './index.css'

const ExperienceDetails = () => (
  <li className="educationListItem">
    <div className="instituteContainer">
      <label htmlFor="exInstituteId" className="instituteLabel">
        Company
      </label>
      <input id="exInstituteId" className="instituteInputBox" />
    </div>
    <div className="yearContainer">
      <label htmlFor="exYearId" className="instituteLabel">
        Year
      </label>
      <input id="exYearId" className="yearInputBox" />
    </div>
    <div className="degreeContainer">
      <label htmlFor="exDegreeId" className="instituteLabel">
        Designation
      </label>
      <input id="exDegreeId" className="degreeInputBox" />
    </div>
  </li>
)

export default ExperienceDetails

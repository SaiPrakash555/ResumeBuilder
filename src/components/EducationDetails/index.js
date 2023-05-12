import './index.css'

const EducationDetails = () => (
  <li className="educationListItem">
    <div className="instituteContainer">
      <label htmlFor="edInstituteId" className="instituteLabel">
        Institute
      </label>
      <input id="edInstituteId" className="instituteInputBox" />
    </div>
    <div className="yearContainer">
      <label htmlFor="edYearId" className="instituteLabel">
        Year
      </label>
      <input id="edYearId" className="yearInputBox" />
    </div>
    <div className="degreeContainer">
      <label htmlFor="edDegreeId" className="instituteLabel">
        Degree
      </label>
      <input id="edDegreeId" className="degreeInputBox" />
    </div>
  </li>
)

export default EducationDetails

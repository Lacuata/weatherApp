import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css'

// array for 7 day
const Weekdays =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',]

const Forecast = ({data}) => {
    
    // to getday today  and determine the next date 
    const dayInAWeek = new Date().getDay();
    // to get the day and weekdays.length of it then concat it to weekdays
    const forecastDays = Weekdays.slice(dayInAWeek, Weekdays.length).concat(Weekdays.slice(0, dayInAWeek))

return (
    <div>
        <label className="title">Daily</label>
{/*         allowZeroExpanded all accordion to be closed if we allow ZeroExpanded 
 otherwise one of the accordion need to be opened up*/}
        <Accordion allowZeroExpanded> 
        {/* loop the data list then splice it to 7 to 7 days*/}
        {data.list.splice(0,7).map((item, index) => (
            // ItemHeading
        <AccordionItem key={index}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img alt="weather" className="small-icon" src={`icons/${item.weather[0].icon}.png`} />
                        {/* to show day today and next day */}
                        <label className="day">{forecastDays[index]}</label>
                        {/* weather descriptions */}
                        <label className="descriptions">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            {/* AccordionItemPanel this is a part if we click the panel it will show the details of it or expand the details */}
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label>Pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind speed:</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>temperature level:</label>
                        <label>{item.main.temp}</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Feels like:</label>
                        <label>{Math.round(item.main.feels_like)}°C </label>
                    </div>
                    
                </div>
            </AccordionItemPanel>
        </AccordionItem>

        ))}

        </Accordion>
    </div>
)

}

export default Forecast;
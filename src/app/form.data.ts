export const FORM_DATA =
  [
    {
      "controlType": "checkboxGroup",
      "visible": true,
      "list": [
        { "key": "stuWheelchair", "label": "Wheelchair", "required": false, "order": 1, "controlType": "checkbox", "visible": true, "disabled": true, "type": "" },
        { "key": "stuWheelchair2", "label": "Wheelchair", "required": false, "order": 1, "controlType": "checkbox", "visible": true, "disabled": true, "type": "" },
        { "key": "stuCurbToCurb", "label": "Curb-to-curb", "required": false, "order": 1, "controlType": "checkbox", "visible": true, "disabled": true, "type": "" },
        { "key": "stuAide", "label": "Aide", "required": false, "order": 1, "controlType": "checkbox", "visible": true, "disabled": true, "type": "" },
      ]
    },
    {
      "controlType": "timeRange", "visible": true, "label": "Start",
      "start": { "key": "stuStartTimeBegin", "value": "" },
      "end": { "key": "stuStartTimeEnd", "value": "" }
    },
    {
      "controlType": "timeRange", "visible": true, "label": "End",
      "start": { "key": "stuEndTimeBegin", "value": "" },
      "end": { "key": "stuEndTimeEnd", "value": "" }
    },
    {
      "key": "stuStatus", "label": "Reg. Status", "required": false, "order": 1, "controlType": "dropdown", "visible": true, "disabled": false,
      "options": [
        { "key": "A", "value": "A" },
        { "key": "C", "value": "C" },
        { "key": "I", "value": "I" },
        { "key": "+", "value": "+" }
      ]
    },
    { "key": "stuGradeLevel", "label": "Grade Level", "required": false, "order": 1, "controlType": "textbox", "visible": true, "disabled": false, "type": "" }
  ];
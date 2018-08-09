export const FORM_DATA: Array<any> = [
  {
    "sectionTitle": "Section Test",
    "formId": "test",
    "cards": [
      {
        "cardTitle": "Card Title",
        "fields": [
          {
            "controlType": "checkbox",
            "key": "IsWheelchair",
            "label": "Wheelchair",
            "value": "0",
            "order": 1,
            "visible": true,
            "disabled": false,
            "validation": [
              { "required": false }
            ]
          },
          {
            "controlType": "datetimepicker",
            "key": "StartDate",
            "label": "Start",
            "value": "05/26/1980",
            "order": 3,
            "visible": true,
            "disabled": false,
            "validation": [
              { "required": false }
            ]
          },
          {
            "controlType": "dropdown",
            "key": "stuStatus",
            "label": "Reg. Status",
            "value": "A",
            "order": 2,
            "visible": true,
            "disabled": false,
            "options": [
              { "key": "A", "value": "A" },
              { "key": "C", "value": "C" },
              { "key": "I", "value": "I" },
              { "key": "+", "value": "+" }
            ],
            "validation": [
              { "required": false }
            ]
          },
          {
            "controlType": "textbox",
            "key": "stuGradeLevel",
            "label": "Grade Level",
            "value": "Test",
            "order": 4,
            "visible": true,
            "disabled": false,
            "validation": [
              { "required": false }
            ]
          }
        ]
      },
      {
        "cardTitle": "Card 2",
        "fields": [
          {
            "controlType": "checkbox",
            "key": "IsChair",
            "label": "Chair",
            "value": 0,
            "order": 1,
            "disabled": false,
            "formId": "test",
            "validation": [
              { "required": false }
            ]
          },
          {
            "controlType": "datetimepicker",
            "key": "EndDate",
            "label": "End",
            "value": "05/26/1980",
            "order": 3,
            "disabled": false,
            "formId": "test",
            "validation": [
              { "required": false }
            ]
          },
          {
            "controlType": "textbox",
            "key": "stuGradeLevel",
            "label": "Grade Level",
            "value": "Test2",
            "order": 4,
            "disabled": false,
            "formId": "test",
            "validation": [
              { "required": false }
            ]
          }
        ]
      }
    ],
  },
  {
    "sectionTitle": "Section 2 Test",
    "formId": "test",
    "cards": [
      {
        "cardTitle": "Second Tab Card",
        "fields": [
          {
            "controlType": "datetimepicker",
            "key": "TestDate",
            "label": "Test",
            "value": "8/8/2018",
            "order": 3,
            "disabled": false,
            "formId": "test",
            "validation": [
              { "required": false }
            ]
          }
        ]
      }
    ]
  }
];
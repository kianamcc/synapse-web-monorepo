import{ju as p}from"./iframe-D4dZwAiu.js";import{S as a}from"./SchemaDrivenAnnotationEditor-C0qO9eGD.js";import"./index-Chi_LkuB.js";import"./useEntity-CLsVNppT.js";import"./pickBy-Bir1C-NQ.js";import"./isString-B22YpsO2.js";import"./_baseIteratee-hrWHcORH.js";import"./useInfiniteQuery-97YTJVGW.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-ClqOATdC.js";import"./useSchema-BjpsQZQ-.js";import"./index-2Rn6PX6_.js";import"./enums-DV4lz3M_.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-Ce7kzn1Q.js";import"./uniq-CXTi0pNt.js";import"./forEach-CWOCpBhE.js";import"./Add-CYKQDBe2.js";import"./Grid-DVZ-3OGU.js";import"./ListItem-bDUMe4Sp.js";import"./listItemButtonClasses-m92bzCDL.js";import"./ListItemIcon-DTmpSBYk.js";import"./MenuItem-i2UFDYLy.js";import"./ListItemText-BJ_q0YGm.js";import"./ArrowUpward-BDDopaTj.js";import"./ContentCopy-B_4s83Af.js";import"./FormControlLabel-xBFb-JxA.js";import"./Checkbox-8IZKAE9H.js";import"./SwitchBase-BC3YewNK.js";import"./FormGroup-CzqzYkP5.js";import"./RadioGroup-KIMZ7XWq.js";import"./Radio-wL87KhXk.js";import"./Slider-FvUviqZm.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-0mvEAmvI.js";import"./DialogBase-CZmZCl2F.js";import"./Close-pxcZfnaD.js";import"./HelpPopover-COkmGEHV.js";import"./MarkdownPopover-C1RJbRCi.js";import"./LightTooltip-Cpk7XR6L.js";import"./MarkdownSynapse-_XkOqT-B.js";import"./SkeletonButton-BF6SPb4p.js";import"./SkeletonInlineBlock-BE4VGVg9.js";import"./SkeletonTable-8IE5S5u8.js";import"./SkeletonParagraph-CCi1oakt.js";import"./JsonSchemaForm-LHtIvIKF.js";import"./GridLegacy-BP035fBT.js";import"./HelpTwoTone-Djbz0t5R.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-20D5CmUz.js";import"./_createAggregator-Cu1O6Ts8.js";import"./_baseMap-CRskOV4U.js";import"./DateTimePicker-BYGsC45H.js";import"./useMobilePicker-DsWC1wrG.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-BTfnifga.js";import"./index-qjOO6W60.js";import"./Chip-BrFyeTvK.js";import"./Tabs-DcdjFPSA.js";import"./KeyboardArrowRight-DAl4OYqc.js";import"./Autocomplete-DZC1cCXx.js";import"./usePreviousProps-C19eil-U.js";import"./use-deep-compare-effect.esm-CZn1YOV_.js";import"./TextWidget-D7a1JUJh.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-Arrays',
    entityId: 'syn25959281'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'dev.grosenbacher.test-IfThenElse'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    schemaId: 'nkauer-ad.main'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn32673093'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    entityId: 'syn25959288'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    validationSchema: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: \`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/\${mockSchemaBinding.jsonSchemaVersionInfo.$id}\`,
      type: 'object',
      properties: {
        country: {
          enum: ['USA', 'CA'],
          description: 'Test description for country property'
        },
        showStringArray: {
          type: 'boolean'
        }
      },
      required: ['country'],
      allOf: [{
        if: {
          properties: {
            country: {
              const: 'USA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            state: {
              type: 'string'
            }
          },
          required: ['state']
        }
      }, {
        if: {
          properties: {
            country: {
              const: 'CA'
            }
          },
          required: ['country']
        },
        then: {
          properties: {
            province: {
              type: 'string'
            }
          },
          required: ['province']
        }
      }, {
        if: {
          properties: {
            showStringArray: {
              const: true
            }
          },
          required: ['showStringArray']
        },
        then: {
          properties: {
            stringArray: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}};const Ir=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Ir as __namedExportsOrder,vr as default};

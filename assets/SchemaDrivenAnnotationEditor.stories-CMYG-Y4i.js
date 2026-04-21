import{jx as p}from"./iframe-DOWR2259.js";import{S as a}from"./SchemaDrivenAnnotationEditor-CGApfqLZ.js";import"./index-Chi_LkuB.js";import"./useEntity-PgtMFk5n.js";import"./pickBy-y8A-nIER.js";import"./isString-DMC7wGJ0.js";import"./_baseIteratee-D5WTHCBz.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-Bxxw2SLJ.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-BmOqt_6U.js";import"./useSchema-BsV1PzD2.js";import"./index-DwKZ-4GG.js";import"./enums-y62uLdDY.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-v9IjSq7r.js";import"./uniq-CF3-GXPz.js";import"./forEach-UWyboym_.js";import"./Add-DjUxeaYN.js";import"./Grid-DKvo9WFo.js";import"./ListItem-BEerACzy.js";import"./listItemButtonClasses-D40Snkcn.js";import"./ListItemIcon-Dazy-2Nu.js";import"./MenuItem-LKT-cJqE.js";import"./ListItemText-BB2GXAnH.js";import"./ArrowUpward-tE8fY5Ug.js";import"./ContentCopy-FGJqxqOW.js";import"./FormControlLabel-wYqx77kH.js";import"./Checkbox-BEAP1Si0.js";import"./SwitchBase-CQWm8_8T.js";import"./FormGroup-f20ajUnv.js";import"./RadioGroup-GLX9QI89.js";import"./Radio-DeKYa5MS.js";import"./Slider-FC7_D6T6.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-Cb77eqVv.js";import"./DialogBase-BOtiLYHN.js";import"./Close-MTVASP6e.js";import"./HelpPopover-COj67R4q.js";import"./MarkdownPopover-D_jfDB0b.js";import"./LightTooltip-DEgnKIbO.js";import"./MarkdownSynapse-CZF-zxeL.js";import"./SkeletonButton-CL0b5STV.js";import"./SkeletonInlineBlock-dfitKoKa.js";import"./SkeletonTable-juUGe8TZ.js";import"./SkeletonParagraph-tnS4LISQ.js";import"./JsonSchemaForm-mztzdK6I.js";import"./GridLegacy-Qs7jK3sN.js";import"./HelpTwoTone-Dc2qMfZO.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-DDwRiFVp.js";import"./_createAggregator-DJEmbCYe.js";import"./_baseMap-CgaRb8YO.js";import"./DateTimePicker-CO0hqynv.js";import"./useMobilePicker-DuMRWWIM.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-Cy8lSdkk.js";import"./index-BQSvnnEc.js";import"./Chip-CUZVi0iR.js";import"./Tabs-DzvOQ6qU.js";import"./KeyboardArrowRight-Cup0BmKP.js";import"./Autocomplete-CBDbHqTD.js";import"./usePreviousProps-4oQzHQnB.js";import"./use-deep-compare-effect.esm-CEOkDNSr.js";import"./TextWidget-C6uhpdLg.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Er=["Arrays","IfThenElse","ComplexSchema","DerivedAnnotations","ErrorsEntity","DirectlyProvidedSchema"];export{r as Arrays,t as ComplexSchema,o as DerivedAnnotations,s as DirectlyProvidedSchema,n as ErrorsEntity,e as IfThenElse,Er as __namedExportsOrder,Ir as default};

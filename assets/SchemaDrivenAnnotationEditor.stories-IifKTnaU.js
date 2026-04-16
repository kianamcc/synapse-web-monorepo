import{jx as p}from"./iframe-BoShs1FP.js";import{S as a}from"./SchemaDrivenAnnotationEditor-B7FUVJku.js";import"./index-Chi_LkuB.js";import"./useEntity-DOu9xB2b.js";import"./pickBy-CcwyYgKj.js";import"./isString-CnVi7tYZ.js";import"./_baseIteratee-aOl2kpXV.js";import"./queryOptions-C9woPjwX.js";import"./useInfiniteQuery-CWe3h_-o.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-DsjH3l1j.js";import"./useSchema-CtoambtJ.js";import"./index-CiWMDkeK.js";import"./enums-DRCFois1.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-CEqVgz86.js";import"./uniq-BrHAgw_c.js";import"./forEach-UWyboym_.js";import"./Add-CFThgUzk.js";import"./Grid-CnqCusZN.js";import"./ListItem-Bl46HNn4.js";import"./listItemButtonClasses-BmmzCt_y.js";import"./ListItemIcon-CpP6zAgg.js";import"./MenuItem-B1xoDZlQ.js";import"./ListItemText-CA5HMRyT.js";import"./ArrowUpward-CEYOL-J8.js";import"./ContentCopy-BCN7Tm8L.js";import"./FormControlLabel-h3JE9ECB.js";import"./Checkbox-DEIJ5Z9O.js";import"./SwitchBase-DwxvIWq-.js";import"./FormGroup-Ck15U7vp.js";import"./RadioGroup-C8vl9WA9.js";import"./Radio-BGgG7vUD.js";import"./Slider-zo9zcD4b.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DI2sp8KX.js";import"./DialogBase-acH2E9d8.js";import"./Close-X_gTdy4Z.js";import"./HelpPopover-ERFNAkmY.js";import"./MarkdownPopover-D3Ji5HMq.js";import"./LightTooltip-BwX_yUDD.js";import"./MarkdownSynapse-aw0jXk0G.js";import"./SkeletonButton-DhdzaN7E.js";import"./SkeletonInlineBlock-Bqd6TYJI.js";import"./SkeletonTable-IAUM-Obo.js";import"./SkeletonParagraph-BFx803tv.js";import"./JsonSchemaForm-o2q9k4z1.js";import"./GridLegacy-Sie-Mves.js";import"./HelpTwoTone-L7lRGcOS.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-C3o_ufDu.js";import"./_createAggregator-_E2Jlk-m.js";import"./_baseMap-BJz-4MUP.js";import"./DateTimePicker-DwlCfhWP.js";import"./useMobilePicker-BQ8z8Xi2.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-DLxU4jsW.js";import"./index-C5DEBePd.js";import"./Chip-BLhbfSeY.js";import"./Tabs-C6S4ZJq9.js";import"./KeyboardArrowRight-BMtHhWZX.js";import"./Autocomplete-PHs1LHi4.js";import"./usePreviousProps-BBk78ney.js";import"./use-deep-compare-effect.esm-CRYQUXma.js";import"./TextWidget-B_SHub9_.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,Ir={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

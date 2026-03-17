import{jx as p}from"./iframe-I8dsMSSM.js";import{S as a}from"./SchemaDrivenAnnotationEditor-Dd3cuhl2.js";import"./index-Chi_LkuB.js";import"./useEntity-DlG0Sr_U.js";import"./pickBy-CpgGSSQc.js";import"./isString-Bf4Ip_Hk.js";import"./_baseIteratee-BjtSyD36.js";import"./useInfiniteQuery-ByZ3F9Pg.js";import"./InfiniteQueryUtils-CKlRW-xB.js";import"./useEntityBundle-qqhRD9Bx.js";import"./useSchema-Bv5l95Wn.js";import"./index-BW59Al1d.js";import"./enums-Bg2WRRxR.js";import"./_arrayReduce-CrxnWFSq.js";import"./_baseEach-hv5x2_iZ.js";import"./uniq-WWN9NeNB.js";import"./forEach-CWOCpBhE.js";import"./Add-BiC_KIjA.js";import"./Grid-9RoQQr0B.js";import"./ListItem-uUQvUGIH.js";import"./listItemButtonClasses-C2u7v0zY.js";import"./ListItemIcon-mzN_md_t.js";import"./MenuItem-DD1mfKVc.js";import"./ListItemText-xAjDPeU-.js";import"./ArrowUpward-DiwIfRlU.js";import"./ContentCopy-C6Nk-fOn.js";import"./FormControlLabel-UUCY9bEv.js";import"./Checkbox-D9-_Jrd6.js";import"./SwitchBase-QianSKJh.js";import"./FormGroup-DbI2nnK4.js";import"./RadioGroup-DWyjbB5-.js";import"./Radio-DM12mjxC.js";import"./Slider-DmPhWIhb.js";import"./visuallyHidden-Dan1xhjv.js";import"./ConfirmationDialog-DLGB6ehz.js";import"./DialogBase-mHGOMstB.js";import"./Close-D1LcmWDM.js";import"./HelpPopover-BxQCnu74.js";import"./MarkdownPopover-Hp3QtlvD.js";import"./LightTooltip-DuvS2K_c.js";import"./MarkdownSynapse-CuDNblsf.js";import"./SkeletonButton-CmYn4uiY.js";import"./SkeletonInlineBlock-C0iISjKy.js";import"./SkeletonTable-DFj9MMPK.js";import"./SkeletonParagraph-CBxS9HL2.js";import"./JsonSchemaForm-Ber-YZre.js";import"./GridLegacy-Dqp4NCWT.js";import"./HelpTwoTone-Mvo7R7Xf.js";import"./index-browser-esm-k-o2Qe0C.js";import"./groupBy-BS2NoTLt.js";import"./_createAggregator-D4e3Ipy8.js";import"./_baseMap-0mYeZW-r.js";import"./DateTimePicker-CGE8-HM5.js";import"./useMobilePicker-DFNuO5xK.js";import"./index-CvmZKthN.js";import"./index-Chjiymov.js";import"./InputAdornment-CirJh5tS.js";import"./index-Ds_sxz32.js";import"./Chip-6EemW15k.js";import"./Tabs-YGzXY_b8.js";import"./KeyboardArrowRight-DJrStgKW.js";import"./Autocomplete-CTAW0VKo.js";import"./usePreviousProps-BekQqSF_.js";import"./use-deep-compare-effect.esm-DAOMflz-.js";import"./TextWidget-kMFtaLPc.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,vr={title:"Synapse/SchemaDrivenAnnotationEditor",component:a,args:{onSuccess:i(),onCancel:i(),onChange:i()}},r={args:{schemaId:"dev.grosenbacher.test-Arrays",entityId:"syn25959281"}},e={args:{schemaId:"dev.grosenbacher.test-IfThenElse"}},t={args:{schemaId:"nkauer-ad.main"}},o={args:{entityId:"syn32673093"}},n={args:{entityId:"syn25959288"}},s={args:{validationSchema:{$schema:"http://json-schema.org/draft-07/schema#",$id:`https://repo-prod.prod.sagebase.org/repo/v1/schema/type/registered/${p.jsonSchemaVersionInfo.$id}`,type:"object",properties:{country:{enum:["USA","CA"],description:"Test description for country property"},showStringArray:{type:"boolean"}},required:["country"],allOf:[{if:{properties:{country:{const:"USA"}},required:["country"]},then:{properties:{state:{type:"string"}},required:["state"]}},{if:{properties:{country:{const:"CA"}},required:["country"]},then:{properties:{province:{type:"string"}},required:["province"]}},{if:{properties:{showStringArray:{const:!0}},required:["showStringArray"]},then:{properties:{stringArray:{type:"array",items:{type:"string"}}}}}]}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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

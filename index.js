/**
 * @file mofron-comp-checklist/index.js
 * @brief checkbox list component for mofron
 * @license MIT
 */
const FormItem = require("mofron-comp-formitem");
const CheckBox = require("mofron-comp-checkbox");
const comutl = mofron.util.common;

module.exports = class extends FormItem {
    
    /**
     * constructor
     * 
     * @param (mixed) 'text' parameter
     *                key-value: component config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname("CheckList");
            this.shortForm("text");
            
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * get check box component
     *
     * @param (number) index: get index check box
     *                 undefined: get all check box
     * @type private
     */
    getCheckBox (idx) {
        try {
            let chd = this.child();
            if (undefined === idx) {
                let ret = [];
                for (let cidx in chd) {
                    if (true === comutl.isinc(chd[cidx], "CheckBox")) {
                        ret.push(chd[cidx]);
                    }
                }
                return ret;
            }
            return (undefined !== chd[cidx]) ? chd[cidx] : null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * checkbox text contents setter/getter
     * 
     * @param (mixed) string: text contents string
     *                mofron-comp-text: text contents component
     *                array: checkbox text contents list
     *                undefined: call as getter
     * @return (array) checkbox text contents list
     * @type parameter
     */
    text (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                let chk_lst = this.getCheckBox();
                let ret     = [];
                for (let cidx in chk_lst) {
                    ret.push(chk_lst[cidx].text());
                }
                return ret;
            }
	    /* setter */
            if (true === Array.isArray(prm)) {
                for (let pidx in prm) {
                    this.text(prm[pidx]);
                }
                return;
            }
            
	    let clst = this;
	    let chd_evt = () => {
                let evt = clst.changeEvent();
		for (let eidx in evt) {
                    evt[eidx][0](clst, clst.check(), evt[eidx][1]);
                }
	    };
            this.child(new CheckBox({ text: prm, changeEvent: chd_evt }));
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * checkbox text contents setter/getter
     * same as 'text' parameter
     * 
     * @param (mixed) string: text contents string
     *                mofron-comp-text: text contents component
     *                array: checkbox text contents list
     *                undefined: call as getter
     * @return (array) checkbox text contents list
     * @type parameter
     */
    checkbox (prm) {
        try {
            return this.text(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value setter/getter
     *
     * @param (boolean) true: check
     *                  false: uncheck
     *                  undefined: call as getter
     * @param (number) check target index
     * @return (array) check status
     * @type parameter
     */
    check (flg, idx) {
        try {
            let chk_lst = this.getCheckBox();
	    if ((undefined === flg) && (undefined === idx)) {
                let ret = [];
                for (let cidx in chk_lst) {
                    ret.push(chk_lst[cidx].check());
	        }
		return ret;
	    }
	    if (undefined === idx) {
	        for (let cidx in chk_lst) {
                    chk_lst[cidx].check(flg);
		}
		return;
            }
            return chk_lst[idx].check(flg);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     *
     * @param (boolean) the same as 'check' parameter
     * @param (number) the same as 'check' parameter
     * @return (array) check status
     * @type parameter
     */
    value (prm, idx) {
        try {
	    return this.check(prm, idx);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus check box setter/getter
     *
     * @param (boolean) true: focus target check box
     *                  false: defocus target check box
     *                  undefined: call as getter
     * @param (number) target index
     * @return (boolean) focus status of target index
     * @type private
     */
    focus (prm, idx) {
        try {
            let chk = this.getCheckBox();
            if ((undefined === prm) && (undefined === idx)) {
                /* getter */
                let ret = [];
                for (let cidx in chk) {
                    ret.push(chk[cidx].focus());
		}
		return ret;
            }
	    if (undefined === idx) {
		return;
	    }
            return chk[idx].focus(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * check box enable/disable status
     * 
     * @param (boolean) true: change enable mode (default)
     *                  false: change disable mode
     *                  undefined: call as getter
     * @return (boolean) current item status
     * @type parameter
     */
    status (prm) {
        try {
            let chk_lst = this.getCheckBox();
            let ret     = chk_lst[0].status(prm);
	    for (let cidx in chk_lst) {
                if (ret !==  chk_lst[cidx].status()) {
		    console.warn("mismatched check box status:" + cidx);
		}
            }
	    return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * uncheck all check box
     *
     * @type function
     */
    clear () {
        try {
	    let chk = this.getCheckBox();
	    for (let cidx in chk) {
	        chk[cidx].check(false);
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */

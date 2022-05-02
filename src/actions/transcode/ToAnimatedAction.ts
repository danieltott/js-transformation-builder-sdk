import {Action} from "../../internal/Action.js";
import {Qualifier} from "../../internal/qualifier/Qualifier.js";
import {AnimatedFormatQualifierValue} from "../../qualifiers/animatedFormat/AnimatedFormatQualifierValue.js";
import {animatedWebP} from "../../qualifiers/flag.js";
import {animated} from "../../qualifiers/flag.js";
import {IToAnimatedActionModel} from "../../internal/models/ITranscodeActionModel.js";
import {IActionModel} from "../../internal/models/IActionModel.js";

/**
 * @extends SDK.Action
 * @memberOf Actions.Transcode
 * @description Converts a video to an animated webp or gif.
 * The resulting transformation includes format (f_format) and the animated flag (fl_animated).
 * The flag fl_awebp is added only when an animated webp is requested.
 * @see Visit {@link Actions.Transcode|Transcode} for an example
 */
class ToAnimatedAction extends Action {
  protected _actionModel : IToAnimatedActionModel = {actionType: 'toAnimated'};
  constructor(animatedFormat: AnimatedFormatQualifierValue | string = '') {
    super();
    if (animatedFormat.toString() === 'webp'){
      this.addFlag(animatedWebP());
    }
    this.addFlag(animated());
    if (animatedFormat) {
      this.addQualifier(new Qualifier('f', animatedFormat));
    }
    this._actionModel.animatedFormat = animatedFormat as string;
  }

  /**
   * @description Sets the time between frames.
   * @param delayValue The time in milliseconds.
   */
  delay(delayValue: number): this {
    this.addQualifier(new Qualifier('dl', delayValue));
    this._actionModel.delay = delayValue;
    return this;
  }

  /**
   * @description Sets the frequency at which the video is sampled.
   * @param sampling As a string (e.g. '2.3s'), samples one frame every 2.3 seconds.<br>As a number (e.g. 20),
   * samples that many equally spaced frames over the duration of the video.
   */
  sampling(sampling: string|number): this {
    this.addQualifier(new Qualifier('vs', sampling));
    this._actionModel.sampling = sampling;
    return this;
  }

  static fromJson(actionModel: IActionModel): ToAnimatedAction {
    const {animatedFormat, sampling, delay} = (actionModel as IToAnimatedActionModel);
    // We are using this() to allow inheriting classes to use super.fromJson.apply(this, [actionModel])
    // This allows the inheriting classes to determine the class to be created
    const result = new this(animatedFormat);
    sampling && result.sampling(sampling);
    delay && result.delay(delay);

    return result;
  }
}
export default ToAnimatedAction;

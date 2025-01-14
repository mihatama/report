import React, { useState } from 'react';

/**
 * すいな法乳房ケア カルテのレイアウトを <table> で再現する例
 */
function App() {
  const [formData, setFormData] = useState({
    no: '',
    month: '',
    day: '',
    locationTakarazuka: false,
    locationNishinomiya: false,
    locationNagoya: false,
    locationUrawa: false,
    locationHomeVisit: false,
    locationPostpartumCare: false,
    staffName: '',
    traineeName: '',
    bodyWeight: '',
    weightGain: '',
    weanDate: '',
    motherMilkTimes: '',
    motherMilkInterval: '',
    formulaFrequency: '',
    formulaAmount: '',
    pumpedMilkFrequency: '',
    pumpedMilkAmount: '',
    weaningFood: '',
    bowelMovements: '',
    urineFrequency: '',
    childDevelopment: '',
    // 右・左乳房円
    rightBreastClock: '',
    leftBreastClock: '',
    // チェックボックス類
    breastShape: '',
    nippleShieldUse: false,
    breastPumpUse: '',
    breastCondition: '',
    painCondition: '',
    breastfeedingPosture: '',
    familySupport: '',
    sNote: '',
    pNote: '',
    breastDiagnosis: '',
    paymentMethod: '',
    paymentDetail: '',
  });

  // 入力変更ハンドラ
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 送信などの処理（ダミー）
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('送信しました（デモ）');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>すいな法乳房ケア 乳房ケアカルテ</h1>

      <form onSubmit={handleSubmit}>
        <table
          style={{
            borderCollapse: 'collapse',
            width: '100%',
            border: '1px solid #333',
          }}
        >
          <tbody>
            {/* ヘッダー部分 */}
            <tr style={{ borderBottom: '1px solid #333' }}>
              <td colSpan={3} style={{ padding: '4px', width: '70%' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div>
                    <span>氏名(お子様名前):</span>
                    <input
                      style={{ marginLeft: '8px' }}
                      type="text"
                      placeholder="〇〇ちゃん"
                    />
                  </div>
                  <div>
                    <span>すいな法乳房ケア 乳房ケアカルテ</span>
                  </div>
                </div>
              </td>
              <td colSpan={2} style={{ borderLeft: '1px solid #333', padding: '4px', verticalAlign: 'top' }}>
                <label>担当者名:</label>
                <input
                  style={{ marginLeft: '8px' }}
                  name="staffName"
                  value={formData.staffName}
                  onChange={handleChange}
                />
                <br />
                <label>研修生:</label>
                <input
                  style={{ marginLeft: '8px', marginTop: '4px' }}
                  name="traineeName"
                  value={formData.traineeName}
                  onChange={handleChange}
                />
              </td>
            </tr>

            {/* No.( ) 、月、日、チェックボックス(宝塚・西宮…）、体重・増加量など */}
            <tr style={{ borderBottom: '1px solid #333' }}>
              <td style={{ padding: '4px', width: '80px' }}>
                <div>No.( )</div>
                <input
                  name="no"
                  value={formData.no}
                  onChange={handleChange}
                  style={{ width: '60px' }}
                />
              </td>
              <td style={{ padding: '4px', width: '100px' }}>
                <div>
                  月：
                  <input
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    style={{ width: '40px' }}
                  />
                  &nbsp;日：
                  <input
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    style={{ width: '40px' }}
                  />
                </div>
              </td>
              <td style={{ padding: '4px', verticalAlign: 'top' }}>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="locationTakarazuka"
                      checked={formData.locationTakarazuka}
                      onChange={handleChange}
                    />
                    宝塚
                  </label>
                  <label style={{ marginLeft: '1rem' }}>
                    <input
                      type="checkbox"
                      name="locationNishinomiya"
                      checked={formData.locationNishinomiya}
                      onChange={handleChange}
                    />
                    西宮
                  </label>
                  <label style={{ marginLeft: '1rem' }}>
                    <input
                      type="checkbox"
                      name="locationNagoya"
                      checked={formData.locationNagoya}
                      onChange={handleChange}
                    />
                    名古屋
                  </label>
                  <label style={{ marginLeft: '1rem' }}>
                    <input
                      type="checkbox"
                      name="locationUrawa"
                      checked={formData.locationUrawa}
                      onChange={handleChange}
                    />
                    浦和
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="locationHomeVisit"
                      checked={formData.locationHomeVisit}
                      onChange={handleChange}
                    />
                    訪問
                  </label>
                  <label style={{ marginLeft: '1rem' }}>
                    <input
                      type="checkbox"
                      name="locationPostpartumCare"
                      checked={formData.locationPostpartumCare}
                      onChange={handleChange}
                    />
                    産後ケア
                  </label>
                </div>
              </td>

              {/* 体重・増加量 */}
              <td style={{ borderLeft: '1px solid #333', padding: '4px' }}>
                <div>
                  <label>体重(g):</label>
                  <input
                    name="bodyWeight"
                    value={formData.bodyWeight}
                    onChange={handleChange}
                    style={{ width: '80px' }}
                  />
                </div>
                <div>
                  <label>増加量(g/日):</label>
                  <input
                    name="weightGain"
                    value={formData.weightGain}
                    onChange={handleChange}
                    style={{ width: '80px' }}
                  />
                </div>
              </td>

              {/* 卒乳/断乳日 */}
              <td style={{ padding: '4px', verticalAlign: 'top' }}>
                <div>
                  <label>卒乳/断乳日:</label>
                  <input
                    type="date"
                    name="weanDate"
                    value={formData.weanDate}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>

            {/* 母乳やミルク、離乳食、便尿回数等 */}
            <tr>
              <td colSpan={3} style={{ verticalAlign: 'top', borderRight: '1px solid #333' }}>
                {/* 左側: 母乳・ミルク関連 */}
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '80px' }}>母乳</td>
                      <td>
                        <input
                          placeholder="回/日 (朝,日中,夜中)"
                          name="motherMilkTimes"
                          value={formData.motherMilkTimes}
                          onChange={handleChange}
                          style={{ width: '150px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>間隔</td>
                      <td>
                        <input
                          placeholder="時間 ～ 時間"
                          name="motherMilkInterval"
                          value={formData.motherMilkInterval}
                          onChange={handleChange}
                          style={{ width: '150px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>ミルク</td>
                      <td>
                        回/日:
                        <input
                          name="formulaFrequency"
                          value={formData.formulaFrequency}
                          onChange={handleChange}
                          style={{ width: '50px', marginLeft: '4px' }}
                        />
                        &nbsp;量(ml):
                        <input
                          name="formulaAmount"
                          value={formData.formulaAmount}
                          onChange={handleChange}
                          style={{ width: '60px', marginLeft: '4px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>搾母乳</td>
                      <td>
                        回/日:
                        <input
                          name="pumpedMilkFrequency"
                          value={formData.pumpedMilkFrequency}
                          onChange={handleChange}
                          style={{ width: '50px', marginLeft: '4px' }}
                        />
                        &nbsp;量(ml):
                        <input
                          name="pumpedMilkAmount"
                          value={formData.pumpedMilkAmount}
                          onChange={handleChange}
                          style={{ width: '60px', marginLeft: '4px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>離乳食</td>
                      <td>
                        <input
                          placeholder="硬さ,形状,補食など"
                          name="weaningFood"
                          value={formData.weaningFood}
                          onChange={handleChange}
                          style={{ width: '180px' }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>便回数</td>
                      <td>
                        <input
                          name="bowelMovements"
                          value={formData.bowelMovements}
                          onChange={handleChange}
                          style={{ width: '60px' }}
                        />
                        /日
                      </td>
                    </tr>
                    <tr>
                      <td>尿回数</td>
                      <td>
                        <input
                          name="urineFrequency"
                          value={formData.urineFrequency}
                          onChange={handleChange}
                          style={{ width: '60px' }}
                        />
                        /日
                      </td>
                    </tr>
                    <tr>
                      <td>【児の発達】</td>
                      <td>
                        <input
                          placeholder="(性状: 硬・普通・軟)"
                          name="childDevelopment"
                          value={formData.childDevelopment}
                          onChange={handleChange}
                          style={{ width: '180px' }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>

              {/* 右側: 乳房の円、チェックリストなど */}
              <td colSpan={2} style={{ verticalAlign: 'top' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {/* 右乳房と左乳房の円 */}
                  <div>
                    <p style={{ textAlign: 'center' }}>右</p>
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        border: '1px solid #999',
                        borderRadius: '50%',
                        position: 'relative',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          top: 0,
                          left: '45%',
                        }}
                      >
                        12
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          bottom: 0,
                          left: '45%',
                        }}
                      >
                        6
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          top: '45%',
                          left: 0,
                        }}
                      >
                        9
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          top: '45%',
                          right: 0,
                        }}
                      >
                        3
                      </span>
                    </div>
                    <input
                      placeholder="右乳房(時刻)の状態"
                      name="rightBreastClock"
                      value={formData.rightBreastClock}
                      onChange={handleChange}
                      style={{ width: '120px' }}
                    />
                  </div>
                  <div>
                    <p style={{ textAlign: 'center' }}>左</p>
                    <div
                      style={{
                        width: '100px',
                        height: '100px',
                        border: '1px solid #999',
                        borderRadius: '50%',
                        position: 'relative',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          top: 0,
                          left: '45%',
                        }}
                      >
                        12
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          bottom: 0,
                          left: '45%',
                        }}
                      >
                        6
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          top: '45%',
                          left: 0,
                        }}
                      >
                        9
                      </span>
                      <span
                        style={{
                          position: 'absolute',
                          fontSize: '12px',
                          top: '45%',
                          right: 0,
                        }}
                      >
                        3
                      </span>
                    </div>
                    <input
                      placeholder="左乳房(時刻)の状態"
                      name="leftBreastClock"
                      value={formData.leftBreastClock}
                      onChange={handleChange}
                      style={{ width: '120px' }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '12px', borderTop: '1px solid #aaa', paddingTop: '8px' }}>
                  <label>
                    乳房の形：
                    <select
                      name="breastShape"
                      value={formData.breastShape}
                      onChange={handleChange}
                    >
                      <option value="">(未選択)</option>
                      <option value="I型">I型</option>
                      <option value="IIa型">IIa型</option>
                      <option value="IIb型">IIb型</option>
                      <option value="III型">III型</option>
                    </select>
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name="nippleShieldUse"
                      checked={formData.nippleShieldUse}
                      onChange={handleChange}
                    />
                    ニップルシールド使用
                  </label>
                  <br />
                  <label>
                    搾乳器使用:
                    <input
                      name="breastPumpUse"
                      value={formData.breastPumpUse}
                      onChange={handleChange}
                      placeholder="(手動/電動/回数等)"
                    />
                  </label>
                  <br />
                  <label>
                    乳頭・乳輪の状態:
                    <input
                      name="breastCondition"
                      value={formData.breastCondition}
                      onChange={handleChange}
                      placeholder="(白斑/亀裂/発赤など)"
                    />
                  </label>
                  <br />
                  <label>
                    疼痛(乳輪・乳頭・乳房):
                    <input
                      name="painCondition"
                      value={formData.painCondition}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    授乳姿勢:
                    <input
                      name="breastfeedingPosture"
                      value={formData.breastfeedingPosture}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    家族などのサポート状況:
                    <input
                      name="familySupport"
                      value={formData.familySupport}
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </td>
            </tr>

            {/* S) */}
            <tr style={{ borderTop: '1px solid #333', height: '100px' }}>
              <td colSpan={5} style={{ verticalAlign: 'top', padding: '4px' }}>
                <strong>S)</strong>
                <br />
                <textarea
                  name="sNote"
                  value={formData.sNote}
                  onChange={handleChange}
                  rows={3}
                  style={{ width: '100%' }}
                />
              </td>
            </tr>

            {/* P) */}
            <tr style={{ borderTop: '1px solid #333', height: '100px' }}>
              <td colSpan={4} style={{ verticalAlign: 'top', padding: '4px' }}>
                <strong>P)</strong>
                <br />
                <textarea
                  name="pNote"
                  value={formData.pNote}
                  onChange={handleChange}
                  rows={3}
                  style={{ width: '100%' }}
                />
              </td>

              {/* 乳房診断 + 支払いなど */}
              <td style={{ verticalAlign: 'top', borderLeft: '1px solid #333', padding: '4px' }}>
                <div>
                  <strong>【乳房診断】</strong>
                  <br />
                  <input
                    name="breastDiagnosis"
                    value={formData.breastDiagnosis}
                    onChange={handleChange}
                    placeholder="#1 など"
                    style={{ width: '80px' }}
                  />
                </div>
                <div style={{ marginTop: '10px' }}>
                  <strong>支払い方法</strong>
                  <br />
                  <input
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    placeholder="カード / PayPay / 現金"
                    style={{ width: '120px' }}
                  />
                  <br />
                  <input
                    name="paymentDetail"
                    value={formData.paymentDetail}
                    onChange={handleChange}
                    placeholder="(初診料1,000円 / 1回5,500円等)"
                    style={{ width: '180px', marginTop: '4px' }}
                  />
                </div>
              </td>
            </tr>

            {/* フッター: 登録ボタン */}
            <tr>
              <td colSpan={5} style={{ padding: '8px', textAlign: 'right' }}>
                <button type="submit" style={{ padding: '8px 16px' }}>
                  登録
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
